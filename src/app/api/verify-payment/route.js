// app/api/verify-payment/route.js
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';

const verifyPayment = (order_id, payment_id, signature) => {
  const text = `${order_id}|${payment_id}`;
  const generated_signature = crypto
    .createHmac('sha256', process.env.NEXT_PUBLIC_RAZORPAY_SECRET)
    .update(text)
    .digest('hex');
  
  return generated_signature === signature;
};

const generateMembershipId = async (sheet) => {
  const rows = await sheet.getRows();
  const baseId = 'FLYMEM24';
  const nextNumber = (rows.length + 1).toString().padStart(5, '0');
  return `${baseId}${nextNumber}`;
};

const sendConfirmationEmail = async (email, fullName, membershipId) => {
  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_EMAIL,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_SMTP_EMAIL,
    to: email,
    subject: 'Welcome to FLY - Membership Confirmation',
    html: `
      <h1>Welcome to Forward Looking Youth!</h1>
      <p>Dear ${fullName},</p>
      <p>Thank you for joining FLY. Your membership has been successfully registered.</p>
      <p>Your Membership ID is: <strong>${membershipId}</strong></p>
      <p>Please keep this ID for future reference.</p>
      <br>
      <p>Best regards,</p>
      <p>The FLY Team</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

async function getSheet() {
  const serviceAccountAuth = new JWT({
    email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive.file',
    ],
  });

  const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID_JOINFLY, serviceAccountAuth);
  await doc.loadInfo();
  return doc.sheetsByIndex[0];
}

export async function POST(request) {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      formData,
      interviewData
    } = await request.json();

    // Verify payment signature
    const isValid = verifyPayment(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    );

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid payment signature' },
        { status: 400 }
      );
    }

    // Get sheet and generate membership ID
    const sheet = await getSheet();
    const membershipId = await generateMembershipId(sheet);

    // Save to Google Sheet
    await sheet.addRow({
      timestamp: new Date().toISOString(),
      membershipId,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      businessName: formData.businessName,
      position: formData.position,
      hearAbout: interviewData.hearAbout,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      paymentStatus: 'Completed',
      amount: '35000',
      ...formData,
      ...interviewData
    });

    // Send confirmation email
    await sendConfirmationEmail(formData.email, formData.fullName, membershipId);

    return NextResponse.json({ 
      success: true,
      membershipId 
    });
  } catch (error) {
    console.error('Verification Error:', error);
    return NextResponse.json(
      { error: 'Payment verification failed' },
      { status: 500 }
    );
  }
}
// app/api/validate-registration/route.js
import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

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
    const { email, phone } = await request.json();
    
    // Get all existing records
    const sheet = await getSheet();
    const rows = await sheet.getRows();
    
    // Check for existing email and phone
    const existingEmail = rows.find(row => row.get('email')?.toLowerCase() === email.toLowerCase());
    const existingPhone = rows.find(row => row.get('phone') === phone);
    
    if (existingEmail) {
      return NextResponse.json({
        success: false,
        error: 'Email address is already registered'
      }, { status: 400 });
    }
    
    if (existingPhone) {
      return NextResponse.json({
        success: false,
        error: 'Phone number is already registered'
      }, { status: 400 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Validation Error:', error);
    return NextResponse.json({
      success: false,
      error: 'Server error during validation'
    }, { status: 500 });
  }
}

// Frontend form validation utilities
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!emailRegex.test(email)) return 'Invalid email format';
  return '';
};

const validatePhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phone) return 'Phone number is required';
  if (!phoneRegex.test(phone)) return 'Invalid Indian phone number';
  return '';
};

const validateName = (name) => {
  if (!name) return 'Name is required';
  if (name.length < 3) return 'Name must be at least 3 characters';
  if (name.length > 50) return 'Name must be less than 50 characters';
  return '';
};

export {
  validateEmail,
  validatePhone,
  validateName
};
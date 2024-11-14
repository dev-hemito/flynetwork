// app/api/contact/route.js
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';

const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID_CONTACT;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY;

async function getContactSheet() {
  try {
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive.file',
      ],
    });

    const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();

    // Get the contact form sheet, create it if it doesn't exist
    let contactSheet = doc.sheetsByTitle['Contact Form Submissions'];
    if (!contactSheet) {
      contactSheet = await doc.addSheet({
        title: 'Contact Form Submissions',
        headerValues: ['name', 'email', 'subject', 'message', 'timestamp']
      });
    }
    return contactSheet;
  } catch (error) {
    console.error('Error accessing Google Sheet:', error);
    throw new Error(`Failed to access Google Sheet: ${error.message}`);
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const sheet = await getContactSheet();
    
    await sheet.addRow({
      name: data.user_name,
      email: data.user_email,
      subject: data.subject,
      message: data.message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json(
      { error: 'Failed to save contact submission' },
      { status: 500 }
    );
  }
}
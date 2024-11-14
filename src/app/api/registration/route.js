import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';

const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID_REGISTER;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY;

async function getSheet() {
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
    return doc.sheetsByIndex[0];
  } catch (error) {
    console.error('Error accessing Google Sheet:', error);
    throw new Error(`Failed to access Google Sheet: ${error.message}`);
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const phone = searchParams.get('phone');
    
    const sheet = await getSheet();
    const rows = await sheet.getRows();
    
    const exists = rows.some(row => {
      return (email && row.get('email') === email) || (phone && row.get('phone') === phone);
    });
    
    return NextResponse.json({ exists });
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json(
      { error: 'Failed to check registration' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const sheet = await getSheet();
    
    // Add the row with all fields from the registration form and quiz
    await sheet.addRow({
      name: data.name,
      email: data.email,
      phone: data.phone,
      category: data.category || '',
      quizScore: data.quizResults?.score?.toString() || '',
      qualified: data.quizResults?.qualified ? 'Yes' : 'No',
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json(
      { error: 'Failed to save registration' },
      { status: 500 }
    );
  }
}
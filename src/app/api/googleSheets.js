// src/utils/googleSheets.js
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL
const GOOGLE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY

async function getSheet() {
    try {
      const serviceAccountAuth = new JWT({
        email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        scopes: [
          'https://www.googleapis.com/auth/spreadsheets',
          'https://www.googleapis.com/auth/drive.file',
        ],
      });
  
      const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth);
      console.log("success getsheet")
      await doc.loadInfo();
      return doc.sheetsByIndex[0];
    } catch (error) {
      console.error('Error accessing Google Sheet:', error);
      throw new Error('Failed to access Google Sheet');
    }
  }

export async function checkUserExists(email, phone) {
    console.log("Reached checkuser");

    const sheet = await getSheet()
    const rows = await sheet.getRows()

    return rows.some(row =>
        row.get('email') === email || row.get('phone') === phone
    )
}
export async function submitToGoogleSheets(data) {
    try {
      const sheet = await getSheet();
      
      const row = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        timestamp: new Date().toISOString(),
        ...Object.entries(data.answers).reduce((acc, [id, answer]) => ({
          ...acc,
          [`question_${id}`]: answer
        }), {})
      };
      
      await sheet.addRow(row);
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      throw new Error('Failed to submit quiz results');
    }
  }
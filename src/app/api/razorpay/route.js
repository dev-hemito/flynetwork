// app/api/razorpay/route.js
import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET,
});

export async function POST(request) {
  try {
    const { amount } = await request.json();

    const order = await razorpay.orders.create({
      amount: amount, // amount in paise
      currency: 'INR',
      payment_capture: 1,
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error('Razorpay Order Error:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
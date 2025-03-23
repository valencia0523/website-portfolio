import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'miyeon5230@gmail.com',
      subject: `[My-portfolio] New Contact from ${name}`,
      text: `From ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ success: true, message: 'Email sent!' });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Error sending email', error },
      { status: 500 }
    );
  }
}

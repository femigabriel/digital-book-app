import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();

  const { name, email, message } = data;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Please fill in all required fields' },
      { status: 400 }
    );
  }

  // Configure the Nodemailer transport with your email provider
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email provider
    auth: {
      user: process.env.EMAIL_USER, // Your email address (environment variable)
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password (environment variable)
    },
  });

  // Set up the email data
  const mailOptions = {
    from: email,
    to: process.env.CLIENT_EMAIL, // Client's email address
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

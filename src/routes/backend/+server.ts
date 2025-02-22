import { PASSWORD, RECEIVEREMAIL, SENDEREMAIL } from '$env/static/private';
import nodemailer from 'nodemailer';

function validateEmail(email: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateUserInput(name: string, email: string, message: string) {
  if (!name.trim()) {
    return new Response(JSON.stringify({ success: false, error: 'Please enter your full name below.' }), { status: 400 });
  }

  if (!validateEmail(email)) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Invalid email format detected. Please enter email address correctly.',
      }),
      { status: 400 },
    );
  }

  if (!message.trim()) {
    return new Response(JSON.stringify({ success: false, error: 'Message cannot be empty. Please enter your message below.' }), { status: 400 });
  }

  return null;
}

export async function POST({ request }) {
  try {
    const { name, email, message } = await request.json();

    const validationError = validateUserInput(name, email, message);

    if (validationError) {
      return validationError;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SENDEREMAIL,
        pass: PASSWORD,
      },
    });

    const emailMessage = {
      from: `"${name}" <${email}>`,
      subject: `New Contact Form Submission`,
      to: RECEIVEREMAIL,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(emailMessage);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Unexpected server error whilst submitting form - ', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}

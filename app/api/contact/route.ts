import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, course, message } = body;

    // TODO: In a real Vercel deployment, you would use Nodemailer or Resend here.
    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'info@redstonedriving.com',
    //   subject: `New Lead: ${name} - ${course}`,
    //   html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Course: ${course}</p><p>Message: ${message}</p>`
    // });

    console.log('Received form submission:', { name, phone, email, course, message });
    console.log('NOTE: Email not sent. Please configure an email provider (e.g. Resend or Nodemailer) in app/api/contact/route.ts.');

    return NextResponse.json({ success: true, message: 'Message received successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ success: false, message: 'Error processing request.' }, { status: 500 });
  }
}

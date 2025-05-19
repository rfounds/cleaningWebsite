import { EmailTemplate } from '../../../components/email/EmailTemplate';
import { ConfirmationEmailTemplate } from '../../../components/email/ConfirmationEmailTemplate';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, sendMessage } = body;

    // Send email to the website owner
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: 'Robby Founds<admin@foundwellservices.com>',
      to: ['efounds@foundwellservices.com'],
      subject: 'Foundwell Services Inquiry',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h1>New Message Received</h1>
          <p><strong>Name or Business:</strong> ${firstName}</p>
          <p><strong>Phone Number:</strong> ${lastName}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${sendMessage}</p>
        </div>
      `,
    });

    if (ownerError) {
      console.error('Error sending email to owner:', ownerError);
      return new Response(JSON.stringify({ error: ownerError }), { status: 500 });
    }

    // Send confirmation email to the user
    const { data: userData, error: userError } = await resend.emails.send({
      from: 'Foundwell Services <noreply@foundwellservices.com>',
      to: [email],
      subject: "We've Received Your Message!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h1>Thank you for contacting Foundwell Services!</h1>
          <p>Hello ${firstName},</p>
          <p>We've received your message and will get back to you shortly.</p>
          <p>Here's a copy of your message:</p>
          <p>${sendMessage}</p>
          <p>Best regards,<br/>The Foundwell Services Team</p>
        </div>
      `,
    });

    if (userError) {
      console.error('Error sending confirmation email to user:', userError);
      return new Response(JSON.stringify({ error: userError }), { status: 500 });
    }

    return new Response(JSON.stringify({ ownerData, userData }), { status: 200 });
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}


import { EmailTemplate } from '../../../components/email/EmailTemplate';
import { ConfirmationEmailTemplate } from '../../../components/email/ConfirmationEmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, sendMessage } = body;

    // Send email to the website owner
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: 'Robby Founds<admin@foundwellservices.com>',
      to: ['r2founds@gmail.com'],
      subject: 'Foundwell Services Inquiry',
      react: EmailTemplate({ firstName, lastName, email, sendMessage }),
    });

    if (ownerError) {
      console.error('Error sending email to owner:', ownerError);
      return new Response(JSON.stringify({ error: ownerError }), { status: 500 });
    }

    // Send confirmation email to the user
    const { data: userData, error: userError } = await resend.emails.send({
      from: 'Foundwell Services <noreply@foundwellservices.com>',
      to: [email],
      subject: 'We’ve Received Your Message!',
      react: ConfirmationEmailTemplate({ firstName, sendMessage }),
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


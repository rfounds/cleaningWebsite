import { EmailTemplate } from '../../../components/email/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, sendMessage } = body;

    const { data, error } = await resend.emails.send({
      from: 'Robby :D <Robby@foundwellservices.com>',
      to: ['efounds@foundwellservices.com'],
      subject: 'Foundwell Services Inquiry',
      react: EmailTemplate({ firstName, lastName, email, sendMessage }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}


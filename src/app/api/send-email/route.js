import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { nome, email, assunto, mensagem } = await req.json();

  const msg = {
    to: 'henriquetg.dev@gmail.com',
    from: process.env.SENDGRID_EMAIL_FROM, // Use um endereço de email verificado
    subject: assunto,
    text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`,
  };

  try {
    await sgMail.send(msg);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}

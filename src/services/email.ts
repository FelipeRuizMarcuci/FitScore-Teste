import nodemailer from "nodemailer";

type EmailData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  fit_score: number;
  classification: string;
};

export async function sendEmail({
  name,
  email,
  subject,
  message,
  fit_score,
  classification,
}: EmailData) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Formulário FitScore" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `Resultados FitScore`,
    text: message,
    replyTo: email,
  });
}

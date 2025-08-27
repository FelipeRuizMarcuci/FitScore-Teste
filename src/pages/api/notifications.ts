import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type EmailData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  fit_score: number;
  classification: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { name, email, subject, message, fit_score, classification } =
    req.body as EmailData;

  try {
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
      from: `"Formulário do Site" <${process.env.SMTP_USER}>`,
      to: email,
      subject: subject || "FitScore - Resultado da Candidatura",
      html: `
        <p>Olá ${name || "Candidato"},</p>
        <p>${message}</p>
        <p><strong>FitScore:</strong> ${fit_score}</p>
        <p><strong>Classificação:</strong> ${classification}</p>
        <br/>
        <p>Atenciosamente,</p>
        <p>Equipe LEGAL</p>
      `,
      replyTo: email,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return res.status(500).json({ success: false, error });
  }
}

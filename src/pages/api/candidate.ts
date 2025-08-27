import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/services/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, email, answers, fit_score, classification } = req.body;

      const { data, error } = await supabase
        .from("candidate")
        .insert([{ name, email, answers, fit_score, classification }]);

      console.log("Insert candidato:", { data, error });

      if (error) {
        return res.status(400).json({ error });
      }

      return res.status(200).json({ data });
    } catch (err) {
      console.error("Erro inesperado:", err);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}

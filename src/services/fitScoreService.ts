import { Candidate, Answers, classifyFitScore } from "../types";
import { supabase } from "./supabase";

export const submitCandidate = async (
  name: string,
  email: string,
  answers: Answers
): Promise<Candidate | null> => {
  const total = [
    ...answers.performance,
    ...answers.energy,
    ...answers.culture,
  ].reduce((a, b) => a + b, 0);
  const fit_score = Math.round((total / 30) * 100);
  const classification = classifyFitScore(fit_score);

  const { data, error } = await supabase
    .from("candidates")
    .insert({ name, email, answers, fit_score, classification })
    .select()
    .single();
  if (error) throw error;
  return data as Candidate;
};

export const getCandidates = async (): Promise<Candidate[]> => {
  const { data, error } = await supabase.from("candidate").select("*");
  if (error) throw error;
  return data as Candidate[];
};

export const getApprovedCandidates = async (): Promise<Candidate[]> => {
  const { data, error } = await supabase
    .from("candidates")
    .select("*")
    .gte("fit_score", 80);
  if (error) throw error;
  return data as Candidate[];
};

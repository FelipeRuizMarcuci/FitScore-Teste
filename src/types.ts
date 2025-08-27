export type Answers = {
  performance: number[];
  energy: number[];
  culture: number[];
};

export type Candidate = {
  id?: string;
  name: string;
  email: string;
  answers: Answers;
  fit_score: number;
  classification:
    | "Fit Altíssimo"
    | "Fit Aprovado"
    | "Fit Questionável"
    | "Fora do Perfil";
  created_at?: string;
};

export const classifyFitScore = (score: number) => {
  if (score >= 80) return "Fit Altíssimo";
  if (score >= 60) return "Fit Aprovado";
  if (score >= 40) return "Fit Questionável";
  return "Fora do Perfil";
};

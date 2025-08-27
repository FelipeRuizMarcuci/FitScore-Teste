import { useState, useEffect } from "react";
import { QuestionBlock } from "../molecules/questionBlock";
import { Candidate, classifyFitScore } from "@/types";

export const FitForm = () => {
  const [performance, setPerformance] = useState([0, 0, 0]);
  const [energy, setEnergy] = useState([0, 0, 0]);
  const [culture, setCulture] = useState([0, 0, 0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const calculateScore = () => {
    const total = [...performance, ...energy, ...culture].reduce(
      (a, b) => a + b,
      0
    );
    return Math.round((total / 30) * 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const fit_score = calculateScore();
    const classification = classifyFitScore(fit_score);

    const candidate: Candidate = {
      name,
      email,
      answers: { performance, energy, culture },
      fit_score,
      classification,
    };

    try {
      const response = await fetch("/api/candidate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(candidate),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Candidato inserido:", result.data);
        setShowModal(true);

        await fetch("/api/notifications", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            subject: "FitScore",
            message: `Aqui estão os resultados da sua candidatura:`,
            fit_score,
            classification,
          }),
        });
      } else {
        console.error("Erro na API:", result.error);
        alert("Erro ao enviar candidato.");
      }
    } catch (err) {
      console.error("Erro inesperado:", err);
      alert("Erro ao enviar candidato.");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-8"
      >
        <h2 className="text-3xl font-extrabold text-gray-800 text-center">
          Formulário FitScore
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        <div className="space-y-6">
          <QuestionBlock
            title="Performance"
            questions={["Experiência", "Entregas", "Habilidades"].map(
              (t, i) => ({ text: t, value: performance[i] })
            )}
            onChange={(i, v) =>
              setPerformance((p) => {
                const c = [...p];
                c[i] = v;
                return c;
              })
            }
          />

          <QuestionBlock
            title="Energia"
            questions={["Disponibilidade", "Prazos", "Pressão"].map((t, i) => ({
              text: t,
              value: energy[i],
            }))}
            onChange={(i, v) =>
              setEnergy((p) => {
                const c = [...p];
                c[i] = v;
                return c;
              })
            }
          />

          <QuestionBlock
            title="Cultura"
            questions={[
              "Valores LEGAL 1",
              "Valores LEGAL 2",
              "Valores LEGAL 3",
            ].map((t, i) => ({ text: t, value: culture[i] }))}
            onChange={(i, v) =>
              setCulture((p) => {
                const c = [...p];
                c[i] = v;
                return c;
              })
            }
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-4 rounded-xl font-semibold text-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {showModal && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 transition-opacity duration-500">
          Candidatura Enviada com Sucesso!
        </div>
      )}
    </div>
  );
};

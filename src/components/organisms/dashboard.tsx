import { useEffect, useState } from "react";
import { Candidate } from "../../types";
import { getCandidates } from "../../services/fitScoreService";
import { Loader } from "../atoms/loader";

interface DashboardProps {
  filter: string;
}

export const Dashboard = ({ filter }: DashboardProps) => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCandidates = async () => {
    try {
      setLoading(true);
      const data = await getCandidates();
      setCandidates(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const filtered =
    filter === "Todos"
      ? candidates
      : candidates.filter((c) => c.classification === filter);

  if (loading) return <Loader />;
  if (error) return <div>Erro ao carregar</div>;
  if (filtered.length === 0) return <div>Nenhum candidato encontrado</div>;

  return (
    <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase"
            >
              Nome
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase"
            >
              FitScore
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase"
            >
              Classificação
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filtered.map((c) => (
            <tr key={c.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">{c.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{c.email}</td>
              <td className="px-6 py-4 whitespace-nowrap font-mono">
                {c.fit_score}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    c.classification === "Fit Altíssimo"
                      ? "bg-green-100 text-green-800"
                      : c.classification === "Fit Aprovado"
                      ? "bg-blue-100 text-blue-800"
                      : c.classification === "Fit Questionável"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {c.classification}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

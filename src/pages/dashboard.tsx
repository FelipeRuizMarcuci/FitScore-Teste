import React, { useState } from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import Navbar from "@/components/organisms/navbar";
import { Dashboard } from "@/components/organisms/dashboard";

const DashboardPage = () => {
  const [filter, setFilter] = useState("Todos");

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-16 lg:pt-20 container mx-auto p-6 flex-1">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Dashboard de Candidatos
        </h1>

        <div className="flex justify-center mb-6">
          <Select value={filter} onChange={handleChange} className="w-64">
            {[
              "Todos",
              "Fit Altíssimo",
              "Fit Aprovado",
              "Fit Questionável",
              "Fora do Perfil",
            ].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </div>

        <Dashboard filter={filter} />
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 FitScore. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default DashboardPage;

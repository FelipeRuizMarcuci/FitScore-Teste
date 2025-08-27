import Navbar from "@/components/organisms/navbar";
import HeroBanner from "@/components/organisms/heroBanner";
import { FitForm } from "@/components/organisms/fitForm";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-16 lg:pt-20">
        <HeroBanner />
      </div>

      <main className="container mx-auto p-6 flex-1">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Formulário FitScore
        </h2>
        <FitForm />
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 FitScore. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;

import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Transforme seu negócio com FitScore
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            A plataforma inteligente para gestão de performance, energia e
            cultura.
          </p>
          <Link
            href="/cadastro"
            className="inline-block bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold px-6 py-3 rounded-lg"
          >
            Comece agora
          </Link>
        </div>

        <div className="lg:w-1/2 flex justify-center"></div>
      </div>
    </section>
  );
};

export default HeroBanner;

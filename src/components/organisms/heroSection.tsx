import Link from "next/link";

const Hero = () => (
  <section className="bg-blue-900 text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">
        Transforme seu negócio com FitScore
      </h1>
      <p className="text-lg mb-6">
        A plataforma inteligente para gestão de fitness e saúde.
      </p>
      <Link href="/cadastro">
        <a className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
          Comece agora
        </a>
      </Link>
    </div>
  </section>
);

export default Hero;

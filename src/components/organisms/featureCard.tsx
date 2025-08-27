import React, { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">Funcionalidades</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <FeatureCard
          title="Treinos Personalizados"
          description="Crie planos de treino adaptados às necessidades de cada cliente."
          icon={<i className="fas fa-dumbbell"></i>}
        />
        <FeatureCard
          title="Nutrição Integrada"
          description="Ofereça planos alimentares alinhados aos objetivos dos clientes."
          icon={<i className="fas fa-apple-alt"></i>}
        />
        <FeatureCard
          title="Monitoramento em Tempo Real"
          description="Acompanhe o progresso dos clientes em tempo real."
          icon={<i className="fas fa-chart-line"></i>}
        />
      </div>
    </div>
  </section>
);

export default Features;

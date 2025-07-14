import React from "react";
import { useTranslation } from "react-i18next";

const services = [
  {
    key: "consulting",
    icon: "💻",
    titleKey: "services.consulting",
    descKey: "services.consultingDesc",
    cta: "En savoir plus"
  },
  {
    key: "dev",
    icon: "🛠️",
    titleKey: "services.dev",
    descKey: "services.devDesc",
    cta: "Découvrir"
  },
  {
    key: "marketing",
    icon: "📈",
    titleKey: "services.marketing",
    descKey: "services.marketingDesc",
    cta: "Voir nos offres"
  },
  {
    key: "media",
    icon: "🎬",
    titleKey: "services.media",
    descKey: "services.mediaDesc",
    cta: "Voir nos réalisations"
  },
];

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto py-12 px-4 animate-fadeIn">
      <h2 className="text-4xl font-extrabold text-accent mb-10 text-center">{t('services.title', 'Nos services')}</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.key} className="bg-white shadow-card rounded-card p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 animate-fadeIn">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-primary mb-2">{t(service.titleKey)}</h3>
            <p className="text-gray-600 mb-6">{t(service.descKey)}</p>
            <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-accent transition-colors duration-200">
              {service.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 
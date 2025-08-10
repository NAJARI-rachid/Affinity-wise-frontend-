import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "Consulting",
      titleKey: "Consulting IT",
      descKey: "services.consultingDesc",
      img: "/images/consulting.jpg",
      features: [
        "Stratégie marketing digitale",
        "Gestion des réseaux sociaux",
        "Campagnes publicitaires",
        "SEO et référencement",
        "Analytics et reporting"
      ],
      price: "À partir de 400€/jour"
    },
    {
      key: "Développement",
      titleKey: "Développement Web",
      descKey: "services.devDesc",
      img: "/images/dev.jpg",
      features: [
        "Sites vitrines",
        "Applications web",
        "Applications mobiles",
        "Maintenance et optimisation"
      ],
      price: "Sur devis"
    },
    {
      key: "Design",
      titleKey: "Design & Création",
      descKey: "services.designDesc",
      img: "/images/design.jpg",
      features: [
        "Design UX/UI",
        "Maquettes graphiques",
        "Supports print et web",
        "Motion design"
      ],
      price: "Sur devis"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          {t("services.title", "Nos Services")}
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-1"
            >
              <img
                src={service.img}
                alt={service.titleKey}
                className="h-40 w-full object-cover"
              />

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {service.titleKey}
                </h3>

                <p
                  className={`mb-4 flex-1 ${
                    service.key === "Consulting"
                      ? "flex flex-col font-inter font-normal leading-relaxed text-slate-700 bg-gradient-to-tr from-gray-50 to-white p-3 rounded-lg shadow-sm animate-fadeInUp transition-all duration-300 hover:bg-gradient-to-tr hover:from-blue-50 hover:to-white hover:-translate-y-0.5 hover:shadow-lg hover:text-blue-700"
                      : "text-gray-600 text-sm"
                  }`}
                >
                  {t(service.descKey)}
                </p>

                <ul className="text-sm text-gray-500 list-disc pl-5 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="hover:text-blue-600 transition-colors duration-200">
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="text-lg font-semibold text-blue-500">
                    {service.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

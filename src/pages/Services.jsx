import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const services = [
  {
    key: "dev",
    titleKey: "services.dev",
    descKey: "services.devDesc",
    icon: "💻",
    features: [
      "Développement web sur-mesure",
      "Applications mobiles",
      "APIs et intégrations",
      "Maintenance et évolution",
      "Tests et déploiement"
    ],
    price: "À partir de 800€/jour"
  },
  {
    key: "marketing",
    titleKey: "services.marketing",
    descKey: "services.marketingDesc",
    icon: "📈",
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
    key: "media",
    titleKey: "services.media",
    descKey: "services.mediaDesc",
    icon: "🎨",
    features: [
      "Création d'identité visuelle",
      "Design de logos et chartes",
      "Montage vidéo professionnel",
      "Motion design",
      "Photographie corporate"
    ],
    price: "À partir de 300€/jour"
  },
];

const Services = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("dev");

  return (
    <section className="max-w-5xl mx-auto py-12 px-4 animate-fadeIn">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-10 text-center">{t('services.title', 'Nos services')}</h2>
      <p className="mb-8 text-gray-600 text-center">{t('services.intro', 'Des solutions innovantes et sur-mesure pour transformer votre entreprise')}</p>
      
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={service.key}
            onClick={() => setActiveTab(service.key)}
            className={`bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 animate-fadeIn cursor-pointer ${
              activeTab === service.key ? 'ring-2 ring-blue-500 ring-offset-2' : ''
            }`}
            style={{
              animationDelay: `${0.1 + idx * 0.15}s`,
              boxShadow: activeTab === service.key 
                ? '0 8px 32px 0 rgba(37,99,235,0.18)' 
                : '0 4px 16px 0 rgba(37,99,235,0.08)',
            }}
            onMouseEnter={e => {
              if (activeTab !== service.key) {
                e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(37,99,235,0.18)';
              }
            }}
            onMouseLeave={e => {
              if (activeTab !== service.key) {
                e.currentTarget.style.boxShadow = '0 4px 16px 0 rgba(37,99,235,0.08)';
              }
            }}
          >
            <div className="text-5xl mb-4" style={{ color: '#2563eb' }}>{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(service.titleKey)}</h3>
            <p className="text-gray-600 mb-4">{t(service.descKey)}</p>
            <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200">
              Voir les détails
            </button>
          </div>
        ))}
      </div>

      {/* Detailed Service View */}
      <div className="mt-16">
        {services.map((service) => (
          <div
            key={service.key}
            className={`${
              activeTab === service.key ? 'block' : 'hidden'
            }`}
          >
            <div className="bg-white shadow-lg rounded-xl p-8">
              {/* Service Header */}
              <div className="flex items-center mb-8">
                <div className="text-5xl mr-6" style={{ color: '#2563eb' }}>{service.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {t(service.titleKey)}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Features */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Nos prestations
                  </h3>
                  <div className="space-y-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Card */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Tarification
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-3">
                    {service.price}
                  </div>
                  <p className="text-gray-600 mb-6">
                    Tarifs personnalisés selon vos besoins
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-200">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                  Demander un devis gratuit
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors duration-200 border border-gray-300">
                  Voir nos réalisations
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à transformer votre entreprise ?
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos projets et découvrir comment nous pouvons vous accompagner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200">
              Demander un devis gratuit
            </button>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors duration-200">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 
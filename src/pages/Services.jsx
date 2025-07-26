import React from "react";
import { useTranslation } from "react-i18next";

const services = [
  {
    key: "consulting",
    image: "/consulting.jpg",
    titleKey: "services.consulting",
    descKey: "services.consultingDesc",
    color: "#2563eb",
    cta: "En savoir plus"
  },
  {
    key: "dev",
    image: "/dev.jpg",
    titleKey: "services.dev",
    descKey: "services.devDesc",
    color: "#7c3aed",
    cta: "Découvrir"
  },
  {
    key: "marketing",
    image: "/marketing.jpg",
    titleKey: "services.marketing",
    descKey: "services.marketingDesc",
    color: "#059669",
    cta: "Voir nos offres"
  },
  {
    key: "media",
    image: "/media.jpg",
    titleKey: "services.media",
    descKey: "services.mediaDesc",
    color: "#ea580c",
    cta: "Voir nos réalisations"
  },
];

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-poppins">
            {t('services.title', 'Nos services')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions innovantes et sur-mesure pour transformer votre entreprise
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.key}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fadeIn overflow-hidden"
              style={{
                animationDelay: `${0.1 + idx * 0.15}s`,
              }}
            >
              <div className="relative overflow-hidden">
                {/* Image */}
                <img 
                  src={service.image} 
                  alt={t(service.titleKey)}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8" style={{ zIndex: 999 }}>
                  <div className="space-y-4">
                    {/* Title */}
                    <h3 className="text-4xl font-bold text-white font-poppins" style={{ 
                      textShadow: '3px 3px 6px rgba(0,0,0,1)',
                      color: 'white',
                      fontWeight: 'bold'
                    }}>
                      {t(service.titleKey)}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg text-white leading-relaxed max-w-2xl" style={{ 
                      textShadow: '2px 2px 4px rgba(0,0,0,1)',
                      color: 'white'
                    }}>
                      {t(service.descKey)}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-black bg-opacity-50 text-white rounded-full text-sm font-medium border border-white" style={{ 
                        textShadow: '1px 1px 2px rgba(0,0,0,1)'
                      }}>
                        Expertise
                      </span>
                      <span className="px-4 py-2 bg-black bg-opacity-50 text-white rounded-full text-sm font-medium border border-white" style={{ 
                        textShadow: '1px 1px 2px rgba(0,0,0,1)'
                      }}>
                        Innovation
                      </span>
                      <span className="px-4 py-2 bg-black bg-opacity-50 text-white rounded-full text-sm font-medium border border-white" style={{ 
                        textShadow: '1px 1px 2px rgba(0,0,0,1)'
                      }}>
                        Qualité
                      </span>
                    </div>

                    {/* Button */}
                    <div className="pt-4">
                      <button 
                        className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border-2 border-white"
                        style={{ 
                          backgroundColor: service.color, 
                          textShadow: '2px 2px 4px rgba(0,0,0,1)',
                          color: 'white'
                        }}
                      >
                        {service.cta}
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 font-poppins">
                Prêt à transformer votre entreprise ?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Contactez-nous pour discuter de vos projets et découvrir comment nous pouvons vous accompagner
              </p>
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Commencer maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 
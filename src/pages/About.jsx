import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 animate-fadeIn">
      <div style={{ position: 'relative', width: '100%', marginBottom: '2rem' }}>
        <img
          src="/About.jpg"
          alt="About AffinityWise"
          style={{
            width: '100vw',
            maxHeight: '100vh',
            objectFit: 'cover',
            objectPosition: 'center bottom',
            display: 'block',
            borderRadius: '0',
            boxShadow: '0',
            margin: '0',
            padding: '0',
          
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '1.5rem',
            background: 'rgba(0,0,0,0.35)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            pointerEvents: 'none',
          }}
        >
          <h1
            style={{
              color: '#fff',
              fontSize: '2.7rem',
              fontWeight: 900,
              fontFamily: 'Poppins, ui-sans-serif',
              textAlign: 'left',
              textShadow: '0 4px 24px rgba(0,0,0,0.45)',
              letterSpacing: 1,
              padding: '1.2rem 2.5rem 0.5rem 2.5rem',
              borderRadius: '1.5rem',
              background: 'rgba(37,99,235,0.25)',
              boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
              maxWidth: '90vw',
              lineHeight: 1.1,
              pointerEvents: 'auto',
              marginTop: '2.2rem',
              marginLeft: '2.5rem',
            }}
          >
            {t('about.title', 'À propos de nous')}
          </h1>
          <p
            style={{
              color: '#fff',
              fontSize: '1.25rem',
              fontWeight: 500,
              fontFamily: 'Inter, ui-sans-serif',
              textAlign: 'left',
              textShadow: '0 2px 12px rgba(0,0,0,0.35)',
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '1.2rem',
              padding: '0.7rem 2.5rem',
              marginLeft: '2.5rem',
              marginTop: '0.5rem',
              maxWidth: '700px',
              pointerEvents: 'auto',
            }}
          >
            AffinityWise est une entreprise spécialisée dans le consulting IT, le développement, le marketing digital, la vidéo et le design.
          </p>
        </div>
      </div>
      
      {/* Nouvelle section des valeurs avec design timeline */}
      <div className="bg-white shadow-card rounded-card p-10 max-w-4xl w-full">
  <h3  className="text-4xl font-bold text-center mb-12" style={{ color: '#1e293b',fontFamily: "'Playfair Display', serif"
    }}
  >{t('about.values', 'Nos valeurs')}
  </h3>


        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 h-full rounded-full" style={{ top: '80px', bottom: '80px' }}></div>
          
          {/* Values Timeline */}
          <div className="space-y-10">
            {/* Innovation */}
            <div className="flex items-center justify-center animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="w-5/12 pr-12 text-right">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center mb-3">
                    <div className="bg-white bg-opacity-20 rounded-full p-8 mb-4">
                      <img src="/innovation.png" alt="Innovation" style={{ width: '200px', height: '200px', objectFit: 'contain', filter: 'brightness(1.1) contrast(1.1) saturate(1.2)' }} />
                    </div>
                    <h4 className="text-6xl font-bold font-outfit text-center" style={{ color: '#000000' }}>{t('about.value1', 'Innovation')}</h4>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed font-sans tracking-wide" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  Toujours innover pour nos clients avec les dernières technologies et méthodologies</p>
                </div>
              </div>
                            
              
              <div className="w-5/12 pl-12"></div>
            </div>

            {/* Excellence */}
            <div className="flex items-center justify-center animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="w-5/12 pr-12"></div>
              
              <div className="w-5/12 pl-12">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center mb-3">
                    <div className="bg-white bg-opacity-20 rounded-full p-8 mb-4">
                      <img src="/excellence.png" alt="Excellence" style={{ width: '200px', height: '200px', objectFit: 'contain', filter: 'brightness(1.1) contrast(1.1) saturate(1.2)' }} />
                    </div>
                    <h4 className="text-6xl font-bold font-outfit text-center" style={{ color: '#000000' }}>{t('about.value2', 'Excellence')}</h4>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed font-sans tracking-wide" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  L'exigence de la qualité et du résultat dans chaque projet que nous réalisons</p>
                </div>
              </div>
            </div>

            {/* Créativité */}
            <div className="flex items-center justify-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="w-5/12 pr-12 text-right">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center mb-3">
                    <div className="bg-white bg-opacity-20 rounded-full p-8 mb-4">
                      <img src="/créativité.png" alt="Créativité" style={{ width: '200px', height: '200px', objectFit: 'contain', filter: 'brightness(1.1) contrast(1.1) saturate(1.2)' }} />
                    </div>
                    <h4 className="text-6xl font-bold font-outfit text-center" style={{ color: '#000000' }}>{t('about.value3', 'Créativité')}</h4>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed font-sans tracking-wide" style={{ fontFamily: "'Work Sans', sans-serif" }}>L'originalité au service de vos projets avec des solutions innovantes et uniques</p>
                </div>
              </div>
              
             
              
              <div className="w-5/12 pl-12"></div>
            </div>

            {/* Proximité client */}
            <div className="flex items-center justify-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="w-5/12 pr-12"></div>
              
 
              <div className="w-5/12 pl-12">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center mb-3">
                    <div className="bg-white bg-opacity-20 rounded-full p-8 mb-4">
                      <img src="/client.png" alt="Proximité client" style={{ width: '200px', height: '200px', objectFit: 'contain', filter: 'brightness(1.1) contrast(1.1) saturate(1.2)' }} />
                    </div>
                    <h4 className="text-6xl font-bold font-outfit text-center" style={{ color: '#000000' }}>{t('about.value4', 'Proximité client')}</h4>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed font-sans tracking-wide" style={{ fontFamily: "'Work Sans', sans-serif" }}>Un accompagnement personnalisé et réactif tout au long de votre projet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Séparateur graphique */}
        <div style={{ width: '100%', margin: '2.5rem 0' }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 40, display: 'block' }}><path d="M0 40 Q 360 0 720 40 T 1440 40 V60 H0V40Z" fill="#f3f4f6"/></svg>
        </div>
        
        {/* Notre vision */}
        <div className="bg-white shadow-card rounded-2xl p-10 max-w-3xl w-full mb-10 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-primary mb-4 font-poppins text-center" style={{ color: '#1e293b' }}>{t('about.vision', 'Notre vision')}</h3>
          <div className="text-4xl mb-3 text-center">🌟</div>
          <p className="text-gray-700 text-base text-center">{t('about.visionText', 'Accompagner nos clients dans leur transformation digitale avec une approche humaine et innovante.')}</p>
        </div>
        
        {/* Séparateur graphique */}
        <div style={{ width: '100%', margin: '2.5rem 0' }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 40, display: 'block' }}><path d="M0 40 Q 360 0 720 40 T 1440 40 V60 H0V40Z" fill="#f3f4f6"/></svg>
        </div>
        
        {/* Notre histoire */}
        <div className="bg-white shadow-card rounded-2xl p-10 max-w-3xl w-full animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-bold text-primary mb-4 font-poppins text-center" style={{ color: '#1e293b' }}>{t('about.history', 'Notre histoire')}</h3>
          <div className="text-4xl mb-3 text-center">📖</div>
          <p className="text-gray-700 text-base text-center">{t('about.historyText', 'AffinityWise a été fondée pour répondre aux besoins croissants des entreprises en matière de technologie, de marketing et de design.')}</p>
        </div>
      </div>
    </section>
  );
};

export default About; 
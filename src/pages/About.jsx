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
            width: '100%',
            maxHeight: '420px',
            objectFit: 'cover',
            objectPosition: 'center bottom',
            display: 'block',
            borderRadius: '1.5rem',
            boxShadow: '0 4px 24px 0 rgba(37,99,235,0.10)',
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
      <div className="bg-white shadow-card rounded-card p-10 max-w-3xl w-full">
        <h3 className="text-xl font-bold font-poppins text-center" style={{ color: '#1e293b' }}>{t('about.values', 'Nos valeurs')}</h3>
        <div className="w-full overflow-x-auto" style={{ background: '#fff', borderRadius: '2rem', padding: '1.5rem 0' }}>
          <div className="grid grid-cols-2 gap-20">
            {/* Innovation */}
            <div style={{
              background: '#1e293b',
              border: '1.5px solid #fff',
              borderRadius: '2rem',
              boxShadow: '0 8px 32px 0 rgba(37,99,235,0.12)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              padding: '2.5rem 1.5rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'box-shadow 0.3s, transform 0.3s',
              margin: 0,
            }}
              className="hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.25)] hover:-translate-y-2 hover:scale-105 animate-fadeIn"
              >
              <div style={{ background: 'rgba(255,255,255,0.18)', borderRadius: '50%', padding: 16, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/innovation.png" alt="Innovation" style={{ width: 40, height: 40, objectFit: 'contain' }} />
              </div>
              <div className="font-bold text-white text-xl font-outfit mb-2" style={{ color: '#fff' }}>{t('about.value1', 'Innovation')}</div>
              <div className="text-white text-base opacity-90" style={{ color: '#fff' }}>Toujours innover pour nos clients</div>
            </div>
            {/* Excellence */}
            <div style={{
              background: '#1e293b',
              border: '1.5px solid #fff',
              borderRadius: '2rem',
              boxShadow: '0 8px 32px 0 rgba(37,99,235,0.12)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              padding: '2.5rem 1.5rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'box-shadow 0.3s, transform 0.3s',
              margin: 0,
            }}
              className="hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.25)] hover:-translate-y-2 hover:scale-105 animate-fadeIn"
              >
              <div style={{ background: 'rgba(255,255,255,0.18)', borderRadius: '50%', padding: 16, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/excellence.png" alt="Excellence" style={{ width: 40, height: 40, objectFit: 'contain' }} />
              </div>
              <div className="font-bold text-white text-xl font-outfit mb-2" style={{ color: '#fff' }}>{t('about.value2', 'Excellence')}</div>
              <div className="text-white text-base opacity-90" style={{ color: '#fff' }}>L’exigence de la qualité et du résultat</div>
            </div>
            {/* Créativité */}
            <div style={{
              background: '#1e293b',
              border: '1.5px solid #fff',
              borderRadius: '2rem',
              boxShadow: '0 8px 32px 0 rgba(37,99,235,0.12)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              padding: '2.5rem 1.5rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'box-shadow 0.3s, transform 0.3s',
              margin: 0,
            }}
              className="hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.25)] hover:-translate-y-2 hover:scale-105 animate-fadeIn"
              >
              <div style={{ background: 'rgba(255,255,255,0.18)', borderRadius: '50%', padding: 16, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/créativité.png" alt="Créativité" style={{ width: 40, height: 40, objectFit: 'contain' }} />
              </div>
              <div className="font-bold text-white text-xl font-outfit mb-2" style={{ color: '#fff' }}>{t('about.value3', 'Créativité')}</div>
              <div className="text-white text-base opacity-90" style={{ color: '#fff' }}>L’originalité au service de vos projets</div>
            </div>
            {/* Proximité client */}
            <div style={{
              background: '#1e293b',
              border: '1.5px solid #fff',
              borderRadius: '2rem',
              boxShadow: '0 8px 32px 0 rgba(37,99,235,0.12)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              padding: '2.5rem 1.5rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'box-shadow 0.3s, transform 0.3s',
              margin: 0,
            }}
              className="hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.25)] hover:-translate-y-2 hover:scale-105 animate-fadeIn"
              >
              <div style={{ background: 'rgba(255,255,255,0.18)', borderRadius: '50%', padding: 16, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/client.png" alt="Proximité client" style={{ width: 40, height: 40, objectFit: 'contain' }} />
              </div>
              <div className="font-bold text-white text-xl font-outfit mb-2" style={{ color: '#fff' }}>{t('about.value4', 'Proximité client')}</div>
              <div className="text-white text-base opacity-90" style={{ color: '#fff' }}>Un accompagnement humain et sur-mesure</div>
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
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <img
          src="/Header.jpg"
          alt="Header"
          style={{
            width: '100vw',
            maxHeight: '100vh',
            objectFit: 'cover',
            display: 'block',
            borderRadius: '0',
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            pointerEvents: 'none',
          }}
        >
          <h1
            style={{
              color: '#fff',
              fontSize: '3rem',
              fontWeight: 900,
              fontFamily: 'Poppins, ui-sans-serif',
              textAlign: 'left',
              background: 'rgba(37,99,235,0.65)',
              borderRadius: '1.5rem',
              padding: '1.2rem 2.5rem',
              boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
              maxWidth: '520px',
              lineHeight: 1.25,
              marginLeft: '4vw',
              pointerEvents: 'auto',
              letterSpacing: 0.5,
            }}
          >
            Expertise IT au cœur de vos projets,<br />
            la créativité en signature <br />
          </h1>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 animate-fadeIn">
        <div className="bg-white shadow-card rounded-card p-10 flex flex-col md:flex-row items-center text-center md:text-left max-w-3xl w-full gap-8">
          <div className="flex-1">
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
              {t('home.intro', 'AffinityWise vous accompagne dans vos projets IT, développement, marketing digital, vidéo et design.')}
            </p>
            <Link to="/contact">
              <button
                className="px-20 py-7 rounded-none font-bold text-4xl tracking-wider shadow-lg transition-all duration-500"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: 'transparent',
                  border: '3px solid #3b82f6',
                  color: 'transparent',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: 'linear-gradient(90deg, #3b82f6, #1e40af)',
                  cursor: 'pointer',
                  padding: '10px 20px',
                  fontSize: '1.5rem',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#3b82f6';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#1e40af';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.7)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.backgroundClip = 'initial';
                  e.currentTarget.style.WebkitBackgroundClip = 'initial';
                  e.currentTarget.style.WebkitTextFillColor = 'initial';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'linear-gradient(90deg, #3b82f6, #1e40af)';
                  e.currentTarget.style.color = 'transparent';
                  e.currentTarget.style.borderColor = '#3b82f6';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundClip = 'text';
                  e.currentTarget.style.WebkitBackgroundClip = 'text';
                  e.currentTarget.style.WebkitTextFillColor = 'transparent';
                }}
              >
                {t('home.cta', 'Contactez-nous')}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

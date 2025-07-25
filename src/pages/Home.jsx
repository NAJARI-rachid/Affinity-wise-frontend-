import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import heroImg from "../assets/react.svg";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <img
          src="/Header.jpg"
          alt="Header"
          style={{
            width: '100%',
            maxHeight: '420px',
            objectFit: 'cover',
            display: 'block',
            borderRadius: '0 0 2rem 2rem',
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
          <img src={heroImg} alt="Hero" className="w-40 h-40 mb-6 md:mb-0 md:mr-8" style={{ flexShrink: 0 }} />
          <div className="flex-1">
            {/* Le slogan n'est plus ici */}
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
              {t('home.intro', 'AffinityWise vous accompagne dans vos projets IT, d\u00e9veloppement, marketing digital, vid\u00e9o et design.')}
            </p>
            <Link to="/contact">
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-accent transition-colors duration-200 text-lg">
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
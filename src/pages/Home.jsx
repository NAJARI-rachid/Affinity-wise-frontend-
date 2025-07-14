import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 animate-fadeIn">
      <div className="bg-white shadow-card rounded-card p-10 flex flex-col items-center text-center max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          {t('home.slogan', 'Expertise IT au cœur de vos projets, la créativité en signature')}
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          {t('home.intro', 'AffinityWise vous accompagne dans vos projets IT, développement, marketing digital, vidéo et design.')}
        </p>
        <Link to="/contact">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-accent transition-colors duration-200 text-lg">
            {t('home.cta', 'Contactez-nous')}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home; 
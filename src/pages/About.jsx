import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 animate-fadeIn">
      <div className="bg-white shadow-card rounded-card p-10 max-w-3xl w-full">
        <h2 className="text-4xl font-extrabold text-accent mb-6 text-center">{t('about.title', 'À propos de nous')}</h2>
        <p className="mb-6 text-lg text-gray-600 text-center">{t('about.presentation', 'AffinityWise est une entreprise spécialisée dans le consulting IT, le développement, le marketing digital, la vidéo et le design.')}</p>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-primary mb-2">{t('about.values', 'Nos valeurs')}</h3>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li>{t('about.value1', 'Innovation')}</li>
            <li>{t('about.value2', 'Excellence')}</li>
            <li>{t('about.value3', 'Créativité')}</li>
            <li>{t('about.value4', 'Proximité client')}</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-primary mb-2">{t('about.vision', 'Notre vision')}</h3>
          <p className="text-gray-700">{t('about.visionText', 'Accompagner nos clients dans leur transformation digitale avec une approche humaine et innovante.')}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">{t('about.history', 'Notre histoire')}</h3>
          <p className="text-gray-700">{t('about.historyText', 'AffinityWise a été fondée pour répondre aux besoins croissants des entreprises en matière de technologie, de marketing et de design.')}</p>
        </div>
      </div>
    </section>
  );
};

export default About; 
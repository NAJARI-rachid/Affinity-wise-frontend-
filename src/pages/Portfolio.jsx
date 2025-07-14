import React from "react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    key: "project1",
    titleKey: "portfolio.project1",
    descKey: "portfolio.project1Desc",
    icon: "☁️",
    cta: "Voir le projet"
  },
  {
    key: "project2",
    titleKey: "portfolio.project2",
    descKey: "portfolio.project2Desc",
    icon: "📱",
    cta: "Découvrir"
  },
];

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto py-12 px-4 animate-fadeIn">
      <h2 className="text-4xl font-extrabold text-accent mb-10 text-center">{t('portfolio.title', 'Portfolio')}</h2>
      <p className="mb-8 text-gray-600 text-center">{t('portfolio.intro', 'Découvrez quelques-unes de nos réalisations dans les domaines IT, design, vidéo et marketing.')}</p>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.key} className="bg-white shadow-card rounded-card p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 animate-fadeIn">
            <div className="text-5xl mb-4">{project.icon}</div>
            <h3 className="text-2xl font-bold text-primary mb-2">{t(project.titleKey)}</h3>
            <p className="text-gray-600 mb-6">{t(project.descKey)}</p>
            <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-accent transition-colors duration-200">
              {project.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio; 
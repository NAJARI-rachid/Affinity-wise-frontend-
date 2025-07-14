import React from "react";
import { useTranslation } from "react-i18next";

const teamMembers = [
  { name: "Alice Martin", role: "CEO", icon: "👩‍💼" },
  { name: "Jean Dupont", role: "CTO", icon: "👨‍💻" },
  { name: "Sophie Leroy", role: "Lead Designer", icon: "🎨" },
  { name: "Tom Bernard", role: "Marketing Manager", icon: "📣" },
];

const Team = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto py-12 px-4 animate-fadeIn">
      <h2 className="text-4xl font-extrabold text-accent mb-10 text-center">{t('team.title', 'Notre équipe')}</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="bg-white shadow-card rounded-card p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 animate-fadeIn">
            <div className="text-5xl mb-4">{member.icon}</div>
            <div className="font-semibold text-xl text-primary mb-1">{member.name}</div>
            <div className="text-gray-500 text-base mb-2">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team; 
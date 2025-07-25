import React from "react";
import { useTranslation } from "react-i18next";

const teamMembers = [
  { name: "Zakaria", role: "CEO", icon: "👩‍💼" },
  { name: "Rachid", role: "CTO", icon: "👨‍💻" },
  { name: "Mohamed ", role: "Lead Designer", icon: "🎨" },
  { name: "Yassine", role: "Marketing Manager", icon: "📣" },
];

const Team = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-5xl mx-auto py-12 px-4 animate-fadeIn">
      <h2 className="text-4xl font-extrabold text-accent mb-10 text-center">{t('team.title', 'Notre équipe')}</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white shadow-card rounded-card p-8 flex flex-col items-center text-center transition-all duration-300 animate-fadeIn"
            style={{
              animationDelay: `${0.1 + idx * 0.15}s`,
              boxShadow: '0 4px 16px 0 rgba(37,99,235,0.08)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(37,99,235,0.18)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px 0 rgba(37,99,235,0.08)'}
          >
            <div className="text-5xl mb-4" style={{ color: '#2563eb' }}>{member.icon}</div>
            <div className="font-semibold text-xl text-primary mb-1 font-poppins">{member.name}</div>
            <div className="text-gray-500 text-base mb-2">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team; 
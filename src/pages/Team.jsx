import React from "react";
import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    name: "Zakaria",
    role: "CEO & Fondateur",
    image: "/team/zakaria.jpg",
    email: "zakaria@affinitywise.com",
    phone: "+33 1 23 45 67 89",
    linkedin: "https://linkedin.com/in/zakaria-affinitywise"
  },
  {
    name: "Rachid",
    role: "CTO & Lead Developer",
    image: "/team/rachid.jpg",
    email: "rachid@affinitywise.com",
    phone: "+33 1 23 45 67 90",
    linkedin: "https://linkedin.com/in/rachid-affinitywise"
  },
  {
    name: "Mohamed",
    role: "Lead Designer & Creative Director",
    image: "/team/mohamed.jpg",
    email: "mohamed@affinitywise.com",
    phone: "+33 1 23 45 67 91",
    linkedin: "https://linkedin.com/in/mohamed-affinitywise"
  },
  {
    name: "Yassine",
    role: "Marketing Manager",
    image: "/team/yassine.jpg",
    email: "yassine@affinitywise.com",
    phone: "+33 1 23 45 67 92",
    linkedin: "https://linkedin.com/in/yassine-affinitywise"
  },
];

const Team = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-poppins">
            {t('team.title', 'Notre équipe')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les talents passionnés qui font d'AffinityWise une entreprise d'excellence
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeIn overflow-hidden transform hover:-translate-y-2"
              style={{
                animationDelay: `${0.1 + idx * 0.15}s`,
              }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden pt-6">
                <div className="flex justify-center">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover group-hover:scale-110 transition-transform duration-700 border-4 border-white shadow-lg"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${member.name}&size=256&background=2563eb&color=fff&font-size=0.4`;
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Name and Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 font-poppins mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm">
                    {member.role}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="mt-6">
                  {/* Contact Icons - Aligned horizontally */}
                  <div className="flex justify-center items-center gap-4">
                    {/* Email */}
                    <a href={`mailto:${member.email}`} className="p-2.5 bg-white rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg" title={member.email}>
                      <img src="/mail.png" alt="Email" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                    </a>

                    {/* Phone */}
                    <a href={`tel:${member.phone}`} className="p-2.5 bg-white rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg" title={member.phone}>
                      <img src="/telephone.png" alt="Phone" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                    </a>

                    {/* LinkedIn */}
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg" title="LinkedIn">
                      <img src="/in.png" alt="LinkedIn" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4 font-poppins">
              Rejoignez notre équipe
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Vous souhaitez faire partie de notre aventure ? Contactez-nous !
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 
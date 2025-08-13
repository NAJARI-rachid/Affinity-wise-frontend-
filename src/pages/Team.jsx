import React from "react";
import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    name: "Zakaria",
    role: "CEO & Fondateur",
    image: "/team/zakaria.jpg",
    email: "zakaria@affinitywise.com",
    phone: "+33 1 23 45 67 89",
    linkedin: "https://linkedin.com/in/zakaria-affinitywise",
    description: "Visionnaire et stratège, Zakaria guide AffinityWise vers l'excellence avec plus de 10 ans d'expérience dans le conseil IT.",
    expertise: ["Stratégie d'entreprise", "Conseil IT", "Gestion d'équipe", "Innovation"]
  },
  {
    name: "Rachid",
    role: "CTO & Lead Developer",
    image: "/team/rachid.jpg",
    email: "rachid@affinitywise.com",
    phone: "+33 1 23 45 67 90",
    linkedin: "https://linkedin.com/in/rachid-affinitywise",
    description: "Expert technique passionné, Rachid transforme les idées en solutions digitales innovantes et performantes.",
    expertise: ["Architecture logicielle", "Développement Full-Stack", "DevOps", "Cloud Computing"]
  },
  {
    name: "Mohamed",
    role: "Lead Designer & Creative Director",
    image: "/team/mohamed.jpg",
    email: "mohamed@affinitywise.com",
    phone: "+33 1 23 45 67 91",
    linkedin: "https://linkedin.com/in/mohamed-affinitywise",
    description: "Créatif visionnaire, Mohamed donne vie aux concepts avec des designs qui allient esthétique et fonctionnalité.",
    expertise: ["UX/UI Design", "Design Thinking", "Branding", "Motion Design"]
  },
  {
    name: "Yassine",
    role: "Marketing Manager",
    image: "/team/yassine.jpg",
    email: "yassine@affinitywise.com",
    phone: "+33 1 23 45 67 92",
    linkedin: "https://linkedin.com/in/yassine-affinitywise",
    description: "Stratège marketing digital, Yassine développe des campagnes qui connectent les marques avec leurs audiences.",
    expertise: ["Marketing Digital", "Growth Hacking", "Analytics", "Content Strategy"]
  },
];

const Team = () => {
  const { t } = useTranslation();
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
        padding: '80px 0 60px 0',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=400&fit=crop&crop=center")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}></div>
        
        <div style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
            borderRadius: '20px',
            marginBottom: '24px',
            boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.4)'
          }}>
            <span style={{ fontSize: '40px' }}>👥</span>
          </div>
          
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            lineHeight: '1.2',
            fontFamily: 'Poppins, sans-serif'
          }}>
            {t('team.title')}
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#E5E7EB',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'Inter, sans-serif'
          }}>
            {t('team.intro')}
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#1F2937',
              marginBottom: '16px',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Rencontrez notre <span style={{ color: '#3B82F6' }}>équipe</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif'
            }}>
              Des experts passionnés qui combinent créativité et expertise technique pour créer des solutions exceptionnelles
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #E5E7EB',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 35px -12px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 15px 20px -5px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Image Header */}
                <div style={{
                  position: 'relative',
                  height: '200px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '50px',
                    height: '50px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}>
                    <span style={{ fontSize: '24px' }}>👤</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '32px' }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#1F2937',
                    marginBottom: '8px',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {member.name}
                  </h3>
                  
                  <p style={{
                    color: '#3B82F6',
                    fontWeight: '600',
                    marginBottom: '16px',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    {member.role}
                  </p>
                  
                  <p style={{
                    color: '#6B7280',
                    marginBottom: '20px',
                    lineHeight: '1.6',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    {member.description}
                  </p>

                  {/* Expertise Tags */}
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      Expertise
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          style={{
                            backgroundColor: '#F3F4F6',
                            color: '#374151',
                            padding: '6px 12px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: '500',
                            fontFamily: 'Inter, sans-serif'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div style={{
                    paddingTop: '20px',
                    borderTop: '1px solid #E5E7EB'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '8px'
                    }}>
                      <span style={{ fontSize: '14px', marginRight: '8px' }}>📧</span>
                      <span style={{
                        color: '#6B7280',
                        fontSize: '14px',
                        fontFamily: 'Inter, sans-serif'
                      }}>
                        {member.email}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '8px'
                    }}>
                      <span style={{ fontSize: '14px', marginRight: '8px' }}>📱</span>
                      <span style={{
                        color: '#6B7280',
                        fontSize: '14px',
                        fontFamily: 'Inter, sans-serif'
                      }}>
                        {member.phone}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '14px', marginRight: '8px' }}>🔗</span>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#3B82F6',
                          fontSize: '14px',
                          fontFamily: 'Inter, sans-serif',
                          textDecoration: 'none'
                        }}
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)'
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Prêt à collaborer avec <span style={{ color: '#60A5FA' }}>nous</span> ?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#D1D5DB',
            marginBottom: '32px',
            lineHeight: '1.6',
            fontFamily: 'Inter, sans-serif'
          }}>
            Notre équipe d'experts est prête à transformer vos idées en réalité. Contactez-nous pour commencer votre projet.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center'
          }}>
            <button style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 16px -3px rgba(59, 130, 246, 0.4)',
              transition: 'all 0.3s ease'
            }}>
              Prendre contact
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '16px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Voir nos services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team; 
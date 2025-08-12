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
            Notre <span style={{ color: '#60A5FA' }}>Équipe</span>
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#E5E7EB',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'Inter, sans-serif'
          }}>
            Découvrez les talents passionnés qui font d'AffinityWise une entreprise d'excellence dans le conseil IT et le développement digital.
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
              Rencontrez nos <span style={{ color: '#3B82F6' }}>Experts</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif'
            }}>
              Une équipe pluridisciplinaire d'experts passionnés par l'innovation et l'excellence technique
            </p>
          </div>

          {/* Team Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginBottom: '80px'
          }}>
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid #E5E7EB'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
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
                  background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px'
                }}>
                  <div style={{
                    position: 'relative',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid white',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                  }}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${member.name}&size=256&background=2563eb&color=fff&font-size=0.4`;
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  {/* Name and Role */}
                  <div style={{
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}>
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
                      fontSize: '16px',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      {member.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p style={{
                    color: '#6B7280',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    textAlign: 'center',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    {member.description}
                  </p>

                  {/* Expertise */}
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
                      Expertises
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      justifyContent: 'center'
                    }}>
                      {member.expertise.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          style={{
                            backgroundColor: '#F3F4F6',
                            color: '#374151',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            fontSize: '11px',
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
                      justifyContent: 'center',
                      gap: '12px'
                    }}>
                      {/* Email */}
                      <a 
                        href={`mailto:${member.email}`} 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '40px',
                          height: '40px',
                          backgroundColor: '#F3F4F6',
                          borderRadius: '10px',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none'
                        }}
                        title={member.email}
                      >
                        <span style={{ fontSize: '18px' }}>📧</span>
                      </a>

                      {/* Phone */}
                      <a 
                        href={`tel:${member.phone}`} 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '40px',
                          height: '40px',
                          backgroundColor: '#F3F4F6',
                          borderRadius: '10px',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none'
                        }}
                        title={member.phone}
                      >
                        <span style={{ fontSize: '18px' }}>📱</span>
                      </a>

                      {/* LinkedIn */}
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '40px',
                          height: '40px',
                          backgroundColor: '#F3F4F6',
                          borderRadius: '10px',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none'
                        }}
                        title="LinkedIn"
                      >
                        <span style={{ fontSize: '18px' }}>💼</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{
            textAlign: 'center'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
              borderRadius: '24px',
              padding: '60px 40px',
              color: 'white',
              boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.4)'
            }}>
              <h3 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                marginBottom: '16px',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Rejoignez notre équipe
              </h3>
              <p style={{
                fontSize: '18px',
                marginBottom: '32px',
                opacity: 0.9,
                maxWidth: '600px',
                margin: '0 auto 32px auto',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}>
                Vous souhaitez faire partie de notre aventure et contribuer à l'innovation digitale ? Contactez-nous pour discuter des opportunités !
              </p>
              <button style={{
                backgroundColor: 'white',
                color: '#3B82F6',
                padding: '16px 32px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                fontFamily: 'Inter, sans-serif'
              }}>
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team; 
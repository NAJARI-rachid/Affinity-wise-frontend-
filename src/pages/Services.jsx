import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "Consulting",
      titleKey: "Consulting IT",
      descKey: "services.consultingDesc",
      img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center",
      icon: "💼",
      features: [
        "Stratégie marketing digitale",
        "Gestion des réseaux sociaux",
        "Campagnes publicitaires",
        "SEO et référencement",
        "Analytics et reporting"
      ],
      price: "À partir de 400€/jour",
      color: "#3B82F6"
    },
    {
      key: "Développement",
      titleKey: "Développement Web",
      descKey: "services.devDesc",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center",
      icon: "💻",
      features: [
        "Sites vitrines",
        "Applications web",
        "Applications mobiles",
        "Maintenance et optimisation"
      ],
      price: "Sur devis",
      color: "#8B5CF6"
    },
    {
      key: "Design",
      titleKey: "Design & Création",
      descKey: "services.designDesc",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&crop=center",
      icon: "🎨",
      features: [
        "Design UX/UI",
        "Maquettes graphiques",
        "Supports print et web",
        "Motion design"
      ],
      price: "Sur devis",
      color: "#10B981"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1F2937' }}>
      {/* Hero Section with Wooden Table Background */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=700&fit=crop&crop=center")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 0 40px 0',
        overflow: 'hidden',
        minHeight: '50vh'
      }}>
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}></div>
        
        {/* Blue overlay banner like in the reference image */}
        <div style={{
          position: 'absolute',
          left: '10%',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #3B82F6 100%)',
          padding: '30px 25px 35px 25px',
          borderRadius: '20px',
          maxWidth: '450px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '50px',
            background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
            borderRadius: '16px',
            marginBottom: '16px',
            boxShadow: '0 15px 25px -5px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <span style={{ fontSize: '24px' }}>💼</span>
          </div>
          
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '12px',
            lineHeight: '1.2',
            fontFamily: 'Poppins, sans-serif',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            Solutions <span style={{ 
              color: '#93C5FD',
              textShadow: '0 2px 4px rgba(147, 197, 253, 0.4)'
            }}>Digitales</span>
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#E5E7EB',
            marginBottom: '20px',
            lineHeight: '1.5',
            fontFamily: 'Inter, sans-serif',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
          }}>
            Expertise technique et stratégique pour transformer votre entreprise à l'ère numérique
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '14px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              boxShadow: '0 8px 16px -3px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
            }}>
              Démarrer un projet
            </button>
            <button style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '14px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
            }}>
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        padding: '60px 0',
        backgroundColor: '#F9FAFB'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#1F2937',
              marginBottom: '16px',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Nos <span style={{ color: '#3B82F6' }}>Services</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.5',
              fontFamily: 'Inter, sans-serif'
            }}>
              Une gamme complète de services conçus pour répondre aux défis technologiques modernes
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {services.map((service) => (
              <div
                key={service.key}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 35px -12px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 15px 20px -5px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Image Header */}
                <div style={{
                  position: 'relative',
                  height: '160px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={service.img}
                    alt={service.titleKey}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to top, rgba(0,0,0,0.6), transparent)`
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '40px',
                    height: '40px',
                    backgroundColor: service.color,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 12px -3px rgba(0, 0, 0, 0.3)'
                  }}>
                    <span style={{ fontSize: '20px' }}>{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#1F2937',
                    marginBottom: '12px',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {service.titleKey}
                  </h3>
                  
                  <p style={{
                    color: '#6B7280',
                    marginBottom: '18px',
                    lineHeight: '1.5',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    {t(service.descKey)}
                  </p>

                  {/* Features */}
                  <div style={{ marginBottom: '18px' }}>
                    <h4 style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      Ce que nous offrons
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {service.features.map((feature, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          marginBottom: '8px'
                        }}>
                          <div style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: service.color,
                            borderRadius: '50%',
                            marginTop: '6px',
                            marginRight: '10px',
                            flexShrink: 0
                          }}></div>
                          <span style={{
                            color: '#374151',
                            fontSize: '13px',
                            lineHeight: '1.4',
                            fontFamily: 'Inter, sans-serif'
                          }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div style={{
                    paddingTop: '16px',
                    borderTop: '1px solid #E5E7EB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{
                      backgroundColor: service.color,
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontWeight: '600',
                      fontSize: '12px',
                      boxShadow: '0 3px 4px -1px rgba(0, 0, 0, 0.1)'
                    }}>
                      {service.price}
                    </span>
                    <button style={{
                      color: service.color,
                      backgroundColor: 'transparent',
                      border: 'none',
                      fontWeight: '600',
                      fontSize: '12px',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      En savoir plus →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '60px 0',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '32px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '36px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '12px'
              }}>
                150+
              </div>
              <div style={{
                color: '#6B7280',
                fontWeight: '600',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif'
              }}>Projets réalisés</div>
            </div>
            <div>
              <div style={{
                fontSize: '36px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '12px'
              }}>
                98%
              </div>
              <div style={{
                color: '#6B7280',
                fontWeight: '600',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif'
              }}>Satisfaction client</div>
            </div>
            <div>
              <div style={{
                fontSize: '36px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #10B981, #059669)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '12px'
              }}>
                5+
              </div>
              <div style={{
                color: '#6B7280',
                fontWeight: '600',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif'
              }}>Années d'expérience</div>
            </div>
            <div>
              <div style={{
                fontSize: '36px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #F59E0B, #DC2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '12px'
              }}>
                24/7
              </div>
              <div style={{
                color: '#6B7280',
                fontWeight: '600',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif'
              }}>Support disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '60px 0',
        background: 'linear-gradient(135deg, #1F2937, #111827)'
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
            marginBottom: '16px',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Prêt à transformer votre entreprise ?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#D1D5DB',
            marginBottom: '32px',
            lineHeight: '1.5',
            fontFamily: 'Inter, sans-serif'
          }}>
            Contactez notre équipe d'experts pour une consultation gratuite et découvrez comment nous pouvons vous aider à atteindre vos objectifs digitaux.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
          }}>
            <button style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '14px',
              fontWeight: '600',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 12px -3px rgba(59, 130, 246, 0.4)',
              transition: 'all 0.3s ease'
            }}>
              Demander un devis gratuit
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '14px',
              fontWeight: '600',
              fontSize: '16px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

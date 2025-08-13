import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "consulting",
      titleKey: "services.consulting",
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
      key: "dev",
      titleKey: "services.dev",
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
      key: "design",
      titleKey: "services.design",
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=400&fit=crop&crop=center")',
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
            <span style={{ fontSize: '40px' }}>💼</span>
          </div>
          
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            lineHeight: '1.2',
            fontFamily: 'Poppins, sans-serif'
          }}>
            {t('services.title')}
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#E5E7EB',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'Inter, sans-serif'
          }}>
            Une gamme complète de services conçus pour répondre aux défis technologiques modernes
          </p>
        </div>
      </section>

      {/* Services Section */}
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
              Découvrez nos <span style={{ color: '#3B82F6' }}>services</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif'
            }}>
              Des solutions sur mesure pour transformer vos idées en réalité digitale
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {services.map((service) => (
              <div
                key={service.key}
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
                  overflow: 'hidden'
                }}>
                  <img
                    src={service.img}
                    alt={t(service.titleKey)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${t(service.titleKey)}&size=400&background=${service.color.replace('#', '')}&color=fff&font-size=0.4`;
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '50px',
                    height: '50px',
                    backgroundColor: service.color,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 16px -3px rgba(0, 0, 0, 0.3)'
                  }}>
                    <span style={{ fontSize: '24px' }}>{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '32px' }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#1F2937',
                    marginBottom: '12px',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {t(service.titleKey)}
                  </h3>
                  
                  <p style={{
                    color: '#6B7280',
                    marginBottom: '24px',
                    lineHeight: '1.6',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    {t(service.descKey)}
                  </p>

                  {/* Features */}
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '16px',
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
                          marginBottom: '12px'
                        }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: service.color,
                            borderRadius: '50%',
                            marginTop: '6px',
                            marginRight: '12px',
                            flexShrink: 0
                          }}></div>
                          <span style={{
                            color: '#374151',
                            fontSize: '14px',
                            lineHeight: '1.5',
                            fontFamily: 'Inter, sans-serif'
                          }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div style={{
                    paddingTop: '20px',
                    borderTop: '1px solid #E5E7EB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{
                      backgroundColor: service.color,
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontWeight: '600',
                      fontSize: '14px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#F9FAFB'
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
              AffinityWise en <span style={{ color: '#3B82F6' }}>chiffres</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif'
            }}>
              Des résultats qui parlent d'eux-mêmes
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '48px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '16px'
              }}>
                150+
              </div>
              <div style={{
                color: '#6B7280',
                fontWeight: '600',
                fontSize: '18px',
                fontFamily: 'Inter, sans-serif'
              }}>Projets réalisés</div>
            </div>
            
            <div>
              <div style={{
                fontSize: '48px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '16px'
              }}>
                98%
              </div>
              <div style={{
                color: '#6B7280',
                fontWeight: '600',
                fontSize: '18px',
                fontFamily: 'Inter, sans-serif'
              }}>Satisfaction client</div>
            </div>
            
            <div>
              <div style={{
                fontSize: '48px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #10B981, #059669)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '16px'
              }}>
                5+
              </div>
              <div style={{
                color: '#6B7280',
                fontWeight: '600',
                fontSize: '18px',
                fontFamily: 'Inter, sans-serif'
              }}>Années d'expérience</div>
            </div>
            
            <div>
              <div style={{
                fontSize: '48px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #F59E0B, #DC2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '16px'
              }}>
                24/7
              </div>
              <div style={{
                color: '#6B7280',
                fontWeight: '600',
                fontSize: '18px',
                fontFamily: 'Inter, sans-serif'
              }}>Support disponible</div>
            </div>
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
            Prêt à transformer votre entreprise ?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#D1D5DB',
            marginBottom: '32px',
            lineHeight: '1.6',
            fontFamily: 'Inter, sans-serif'
          }}>
            Contactez notre équipe d'experts pour une consultation gratuite et découvrez comment nous pouvons vous aider à atteindre vos objectifs digitaux.
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
              Demander un devis gratuit
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
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

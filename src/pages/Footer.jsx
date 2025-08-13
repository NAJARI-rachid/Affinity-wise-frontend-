import React from "react";

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1F2937',
      color: 'white',
      padding: '0'
    }}>
      {/* Main Footer Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px 40px 24px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          marginBottom: '60px'
        }}>
          
          {/* Company Info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px',
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
              }}>
                <span style={{ fontSize: '24px', color: 'white' }}>🏢</span>
              </div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: 'white',
                fontFamily: 'Poppins, sans-serif'
              }}>
                AffinityWise
              </h3>
            </div>
            <p style={{
              color: '#D1D5DB',
              lineHeight: '1.6',
              marginBottom: '24px',
              fontSize: '16px',
              fontFamily: 'Inter, sans-serif'
            }}>
              Nous accompagnons vos projets IT, marketing digital, design et développement avec expertise et créativité. Transformons vos idées en réalité digitale.
            </p>
            
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}>
                <span style={{ fontSize: '20px' }}>💼</span>
              </a>
              <a href="mailto:contact@affinitywise.com" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}>
                <span style={{ fontSize: '20px' }}>📧</span>
              </a>
              <a href="tel:+33123456789" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}>
                <span style={{ fontSize: '20px' }}>📱</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Nos Services
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <a href="/services" style={{
                color: '#D1D5DB',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif'
              }}>
                Consulting IT
              </a>
              <a href="/services" style={{
                color: '#D1D5DB',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif'
              }}>
                Développement Web & Mobile
              </a>
              <a href="/services" style={{
                color: '#D1D5DB',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif'
              }}>
                Design & Création
              </a>
              <a href="/services" style={{
                color: '#D1D5DB',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif'
              }}>
                Marketing Digital
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Liens Rapides
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <a href="/" style={{
                color: '#D1D5DB',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif'
              }}>
                Accueil
              </a>
              <a href="/about" style={{
                color: '#D1D5DB',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif'
              }}>
                À propos
              </a>
              <a href="/portfolio" style={{
                color: '#D1D5DB',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif'
              }}>
                Portfolio
              </a>
              <a href="/team" style={{
                color: '#D1D5DB',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif'
              }}>
                Notre équipe
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Contact
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '16px' }}>📧</span>
                </div>
                <a href="mailto:contact@affinitywise.com" style={{
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  contact@affinitywise.com
                </a>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'rgba(139, 92, 246, 0.2)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '16px' }}>📱</span>
                </div>
                <a href="tel:+33123456789" style={{
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  +33 1 23 45 67 89
                </a>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '16px' }}>📍</span>
                </div>
                <span style={{
                  color: '#D1D5DB',
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Paris, France
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '60px'
        }}>
          <h4 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '16px',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Restez informé
          </h4>
          <p style={{
            color: '#D1D5DB',
            marginBottom: '24px',
            fontSize: '16px',
            fontFamily: 'Inter, sans-serif'
          }}>
            Recevez nos dernières actualités et conseils en matière de transformation digitale
          </p>
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              placeholder="Votre email"
              style={{
                padding: '12px 20px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '16px',
                minWidth: '280px',
                fontFamily: 'Inter, sans-serif'
              }}
            />
            <button style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '12px',
              border: 'none',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Inter, sans-serif'
            }}>
              S'abonner
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '24px 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{
            color: '#9CA3AF',
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif'
          }}>
            © {new Date().getFullYear()} AffinityWise. Tous droits réservés.
          </div>
          <div style={{
            display: 'flex',
            gap: '24px'
          }}>
            <a href="/privacy" style={{
              color: '#9CA3AF',
              textDecoration: 'none',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif'
            }}>
              Politique de confidentialité
            </a>
            <a href="/terms" style={{
              color: '#9CA3AF',
              textDecoration: 'none',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif'
            }}>
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

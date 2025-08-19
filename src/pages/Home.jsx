import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Home.css"; // On importe notre CSS

const Home = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* HEADER IMAGE */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <img
          src="/Header.jpg"
          alt="Header"
          style={{
            width: '100vw',
            maxHeight: '100vh',
            objectFit: 'cover',
            display: 'block',
            margin: 0,
            padding: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            pointerEvents: 'none',
          }}
        >
          <h1
            style={{
              color: '#fff',
              fontSize: '3rem',
              fontWeight: 900,
              fontFamily: 'Poppins, sans-serif',
              textAlign: 'left',
              background: 'rgba(37,99,235,0.65)',
              borderRadius: '1.5rem',
              padding: '1.2rem 2.5rem',
              boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
              maxWidth: '520px',
              lineHeight: 1.25,
              marginLeft: '4vw',
              pointerEvents: 'auto',
            }}
          >
            Expertise IT au cœur de vos projets,<br />
            la créativité en signature
          </h1>
        </div>
      </div>

      {/* SECTION BLEUE ANIMÉE */}
      <section className="section-background">
        <div
          style={{
            position: "relative",
            zIndex: 10,
            background: "white",
            borderRadius: "1.5rem",
            padding: "2.5rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            maxWidth: "1000px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              color: visible ? "#2563EB" : "transparent",
              textShadow: visible ? "2px 2px 8px rgba(37, 99, 235, 0.4)" : "none",
              lineHeight: "1.4",
              maxWidth: "700px",
              margin: "0 auto 2rem auto",
              fontFamily: "'Poppins', sans-serif",
              background: visible
                ? "linear-gradient(90deg, #3b82f6 0%, #1e40af 100%)"
                : "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              padding: "0 1rem",
              opacity: visible ? 1 : 0,
              transition: "opacity 1.5s ease, color 0.5s ease, text-shadow 0.5s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#1e40af";
              e.currentTarget.style.textShadow = "3px 3px 12px rgba(30, 64, 175, 0.8)";
              e.currentTarget.style.background =
                "linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)";
              e.currentTarget.style.WebkitBackgroundClip = "text";
              e.currentTarget.style.WebkitTextFillColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#2563EB";
              e.currentTarget.style.textShadow = "2px 2px 8px rgba(37, 99, 235, 0.4)";
              e.currentTarget.style.background =
                "linear-gradient(90deg, #3b82f6 0%, #1e40af 100%)";
              e.currentTarget.style.WebkitBackgroundClip = "text";
              e.currentTarget.style.WebkitTextFillColor = "transparent";
            }}
          >
            AffinityWise, l'alliance de l'expertise et de la créativité
            pour sublimer vos projets IT, développement, vidéo et design.
          </p>

          <Link to="/contact">
            <button
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "1.5rem",
                padding: "15px 40px",
                border: "3px solid #3b82f6",
                borderRadius: "8px",
                background: "linear-gradient(90deg, #3b82f6, #1e40af)",
                color: "#fff",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(59, 130, 246, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {t("home.cta", "Contactez-nous")}
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION NOS SERVICES */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#F9FAFB'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          {/* Titre de la section */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#1F2937',
              marginBottom: '20px',
              fontFamily: 'Poppins, sans-serif',
              lineHeight: '1.2'
            }}>
              Nos <span style={{ color: '#3B82F6' }}>Services</span>
            </h2>
            <p style={{
              fontSize: '20px',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif'
            }}>
              Découvrez notre gamme complète de services pour transformer vos idées en réalité digitale
            </p>
          </div>

          {/* Grille des services */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            marginBottom: '50px'
          }}>
            {/* Service 1: Consulting IT */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              border: '1px solid #E5E7EB',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px',
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)'
              }}>
                <span style={{ fontSize: '40px' }}>💼</span>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '15px',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Consulting IT
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                lineHeight: '1.6',
                marginBottom: '20px',
                fontFamily: 'Inter, sans-serif'
              }}>
                Expertise stratégique pour optimiser vos processus IT, audit de sécurité et conseils en transformation digitale.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  fontSize: '14px',
                  color: '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Audit de sécurité informatique
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  fontSize: '14px',
                  color: '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Optimisation des processus
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Stratégie de transformation
                </li>
              </ul>
            </div>

            {/* Service 2: Développement Web */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              border: '1px solid #E5E7EB',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px',
                boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.3)'
              }}>
                <span style={{ fontSize: '40px' }}>💻</span>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '15px',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Développement Web
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                lineHeight: '1.6',
                marginBottom: '20px',
                fontFamily: 'Inter, sans-serif'
              }}>
                Sites web modernes, applications web et e-commerce sur mesure avec les dernières technologies.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  fontSize: '14px',
                  color: '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Sites web responsifs
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  fontSize: '14px',
                  color: '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Applications web
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  E-commerce
                </li>
              </ul>
            </div>

            {/* Service 3: Design & Création */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              border: '1px solid #E5E7EB',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px',
                boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.3)'
              }}>
                <span style={{ fontSize: '40px' }}>🎨</span>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '15px',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Design & Création
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                lineHeight: '1.6',
                marginBottom: '20px',
                fontFamily: 'Inter, sans-serif'
              }}>
                Identité visuelle, logos, maquettes et designs créatifs pour donner vie à votre marque.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  fontSize: '14px',
                  color: '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Identité visuelle
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  fontSize: '14px',
                  color: '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Logos et branding
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Maquettes UI/UX
                </li>
              </ul>
            </div>

            {/* Service 4: Production Vidéo */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 30px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              border: '1px solid #E5E7EB',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px',
                boxShadow: '0 10px 25px -5px rgba(239, 68, 68, 0.3)'
              }}>
                <span style={{ fontSize: '40px' }}>🎬</span>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '15px',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Production Vidéo
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                lineHeight: '1.6',
                marginBottom: '20px',
                fontFamily: 'Inter, sans-serif'
              }}>
                Vidéos promotionnelles, motion design et contenus audiovisuels pour valoriser votre communication.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  fontSize: '14px',
                  color: '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Vidéos promotionnelles
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  fontSize: '14px',
                  color: '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Motion design
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#6B7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Contenus audiovisuels
                </li>
              </ul>
            </div>
          </div>

          {/* Bouton CTA pour les services */}
          <div style={{
            textAlign: 'center'
          }}>
            <Link to="/services">
              <button style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                color: 'white',
                padding: '18px 40px',
                fontSize: '18px',
                fontWeight: '600',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 15px 35px -5px rgba(59, 130, 246, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(59, 130, 246, 0.4)';
              }}>
                Découvrir tous nos services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
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
            <span style={{ fontSize: '40px' }}>🏢</span>
          </div>
          
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            lineHeight: '1.2',
            fontFamily: 'Poppins, sans-serif'
          }}>
            À propos de <span style={{ color: '#60A5FA' }}>nous</span>
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#E5E7EB',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'Inter, sans-serif'
          }}>
            AffinityWise est une entreprise spécialisée dans le consulting IT, le développement, le marketing digital, la vidéo et le design.
          </p>
        </div>
      </section>

      {/* Values Section */}
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
              Nos <span style={{ color: '#3B82F6' }}>Valeurs</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif'
            }}>
              Les principes qui guident notre approche et notre relation avec nos clients
            </p>
          </div>

          {/* Values Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginBottom: '80px'
          }}>
            {/* Innovation */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '32px',
              boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.1)',
              border: '1px solid #E5E7EB',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
              }}>
                <span style={{ fontSize: '40px' }}>💡</span>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '16px',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Innovation
              </h3>
              <p style={{
                color: '#6B7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}>
                Toujours innover pour nos clients avec les dernières technologies et méthodologies
              </p>
            </div>

            {/* Excellence */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '32px',
              boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.1)',
              border: '1px solid #E5E7EB',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.4)'
              }}>
                <span style={{ fontSize: '40px' }}>⭐</span>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '16px',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Excellence
              </h3>
              <p style={{
                color: '#6B7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}>
                L'exigence de la qualité et du résultat dans chaque projet que nous réalisons
              </p>
            </div>

            {/* Créativité */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '32px',
              boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.1)',
              border: '1px solid #E5E7EB',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #EC4899, #F472B6)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.4)'
              }}>
                <span style={{ fontSize: '40px' }}>🎨</span>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '16px',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Créativité
              </h3>
              <p style={{
                color: '#6B7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}>
                L'originalité au service de vos projets avec des solutions innovantes et uniques
              </p>
            </div>

            {/* Proximité client */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '32px',
              boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.1)',
              border: '1px solid #E5E7EB',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #10B981, #34D399)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.4)'
              }}>
                <span style={{ fontSize: '40px' }}>🤝</span>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '16px',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Proximité client
              </h3>
              <p style={{
                color: '#6B7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}>
                Un accompagnement personnalisé et réactif tout au long de votre projet
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div style={{
            background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
            borderRadius: '24px',
            padding: '60px 40px',
            textAlign: 'center',
            marginBottom: '60px',
            border: '1px solid #E5E7EB'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto',
              boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.4)'
            }}>
              <span style={{ fontSize: '40px' }}>🌟</span>
            </div>
            <h3 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#1F2937',
              marginBottom: '16px',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Notre vision
            </h3>
            <p style={{
              fontSize: '18px',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif'
            }}>
              Accompagner nos clients dans leur transformation digitale avec une approche humaine et innovante.
            </p>
          </div>

          {/* History Section */}
          <div style={{
            background: 'white',
            borderRadius: '24px',
            padding: '60px 40px',
            textAlign: 'center',
            boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.1)',
            border: '1px solid #E5E7EB'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #6B7280, #9CA3AF)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto',
              boxShadow: '0 10px 25px -5px rgba(107, 114, 128, 0.4)'
            }}>
              <span style={{ fontSize: '40px' }}>📖</span>
            </div>
            <h3 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#1F2937',
              marginBottom: '16px',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Notre histoire
            </h3>
            <p style={{
              fontSize: '18px',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: 'Inter, sans-serif'
            }}>
              AffinityWise a été fondée pour répondre aux besoins croissants des entreprises en matière de technologie, de marketing et de design. Notre mission est de transformer les défis digitaux en opportunités de croissance.
            </p>
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
              Quelques statistiques qui témoignent de notre engagement et de notre expertise
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
                background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
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
                background: 'linear-gradient(135deg, #10B981, #059669)',
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
    </div>
  );
};

export default About; 
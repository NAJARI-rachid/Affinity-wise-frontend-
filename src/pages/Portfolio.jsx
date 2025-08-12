import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    key: "project1",
    title: "Plateforme E-commerce",
    description: "Développement d'une plateforme e-commerce complète avec système de paiement sécurisé, gestion des stocks et interface utilisateur intuitive.",
    category: "Développement Web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    icon: "🛒",
    color: "#3B82F6",
    link: "#",
    stats: {
      users: "50K+",
      revenue: "+200%",
      performance: "99.9%"
    }
  },
  {
    key: "project2",
    title: "Application Mobile Fintech",
    description: "Application mobile innovante pour la gestion financière personnelle avec analyse en temps réel et conseils personnalisés.",
    category: "Développement Mobile",
    technologies: ["React Native", "Firebase", "AI", "Blockchain"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    icon: "📱",
    color: "#8B5CF6",
    link: "#",
    stats: {
      downloads: "100K+",
      rating: "4.8/5",
      retention: "85%"
    }
  },
  {
    key: "project3",
    title: "Site Corporate Premium",
    description: "Refonte complète du site web d'une entreprise leader avec design moderne, SEO optimisé et expérience utilisateur exceptionnelle.",
    category: "Design & UX",
    technologies: ["Figma", "WordPress", "SEO", "Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    icon: "💼",
    color: "#10B981",
    link: "#",
    stats: {
      traffic: "+150%",
      conversion: "+45%",
      engagement: "+80%"
    }
  },
  {
    key: "project4",
    title: "Campagne Marketing Digital",
    description: "Stratégie marketing complète incluant réseaux sociaux, publicité ciblée et content marketing pour une croissance exponentielle.",
    category: "Marketing Digital",
    technologies: ["Google Ads", "Facebook Ads", "Content", "Analytics"],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop&crop=center",
    icon: "📈",
    color: "#F59E0B",
    link: "#",
    stats: {
      reach: "2M+",
      leads: "+300%",
      roi: "450%"
    }
  },
  {
    key: "project5",
    title: "Système de Gestion ERP",
    description: "Solution ERP sur mesure pour optimiser les processus internes, la gestion des ressources et la prise de décision.",
    category: "Solutions Entreprise",
    technologies: ["Java", "Spring", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    icon: "⚙️",
    color: "#EF4444",
    link: "#",
    stats: {
      efficiency: "+60%",
      cost: "-30%",
      time: "-50%"
    }
  },
  {
    key: "project6",
    title: "Plateforme de Formation",
    description: "Plateforme e-learning interactive avec vidéos HD, quiz interactifs et suivi des progrès en temps réel.",
    category: "EdTech",
    technologies: ["Vue.js", "Laravel", "AWS", "WebRTC"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
    icon: "🎓",
    color: "#06B6D4",
    link: "#",
    stats: {
      students: "25K+",
      courses: "500+",
      completion: "92%"
    }
  }
];

const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  
  const categories = ["Tous", "Développement Web", "Développement Mobile", "Design & UX", "Marketing Digital", "Solutions Entreprise", "EdTech"];
  
  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
          backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=400&fit=crop&crop=center")',
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
            <span style={{ fontSize: '40px' }}>🎯</span>
          </div>
          
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            lineHeight: '1.2',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Notre <span style={{ color: '#60A5FA' }}>Portfolio</span>
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#E5E7EB',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'Inter, sans-serif'
          }}>
            Découvrez quelques-unes de nos réalisations exceptionnelles dans les domaines IT, design, vidéo et marketing.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          {/* Category Filter */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '60px'
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '50px',
                  border: 'none',
                  backgroundColor: selectedCategory === category ? '#3B82F6' : '#F3F4F6',
                  color: selectedCategory === category ? 'white' : '#374151',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Inter, sans-serif',
                  boxShadow: selectedCategory === category ? '0 10px 15px -3px rgba(59, 130, 246, 0.4)' : 'none'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '32px'
          }}>
            {filteredProjects.map((project, idx) => (
              <div
                key={project.key}
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
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 15px 20px -5px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Project Image */}
                <div style={{
                  position: 'relative',
                  height: '200px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
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
                    background: `linear-gradient(to top, rgba(0,0,0,0.7), transparent)`
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '8px 16px',
                    backgroundColor: project.color,
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    {project.category}
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px'
                  }}>
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#1F2937',
                    marginBottom: '12px',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {project.title}
                  </h3>
                  
                  <p style={{
                    color: '#6B7280',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      Technologies utilisées
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
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
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px',
                    marginBottom: '24px',
                    padding: '16px',
                    backgroundColor: '#F9FAFB',
                    borderRadius: '12px'
                  }}>
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} style={{ textAlign: 'center' }}>
                        <div style={{
                          fontSize: '18px',
                          fontWeight: 'bold',
                          color: project.color,
                          marginBottom: '4px',
                          fontFamily: 'Inter, sans-serif'
                        }}>
                          {value}
                        </div>
                        <div style={{
                          fontSize: '10px',
                          color: '#6B7280',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          fontFamily: 'Inter, sans-serif'
                        }}>
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button style={{
                    width: '100%',
                    backgroundColor: project.color,
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontWeight: '600',
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif',
                    boxShadow: `0 8px 16px -3px ${project.color}40`
                  }}>
                    Voir le projet →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{
            textAlign: 'center',
            marginTop: '80px'
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
                Prêt à créer votre projet ?
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
                Inspiré par nos réalisations ? Contactez-nous pour discuter de votre projet et transformer vos idées en réalité !
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
                Démarrer un projet
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 
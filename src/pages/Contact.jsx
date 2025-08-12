import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    entreprise: "",
    service: "",
    message: "",
  });

  const [confirmation, setConfirmation] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validation simple
    const { nom, prenom, email, message } = formData;
    if (!nom.trim() || !prenom.trim() || !email.trim() || !message.trim()) {
      alert("Merci de remplir tous les champs obligatoires !");
      return;
    }

    // Ici tu peux envoyer les données à un serveur ou API
    // Pour l'exemple, on simule un envoi réussi

    setConfirmation(`Merci ${prenom} ${nom}, votre message a bien été envoyé ! Nous vous recontacterons dans les plus brefs délais.`);

    // Reset formulaire
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      entreprise: "",
      service: "",
      message: "",
    });
  }

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
            <span style={{ fontSize: '40px' }}>📧</span>
          </div>
          
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            lineHeight: '1.2',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Contactez <span style={{ color: '#60A5FA' }}>Notre Équipe</span>
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#E5E7EB',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'Inter, sans-serif'
          }}>
            Prêt à transformer votre entreprise ? Discutons de vos projets et découvrez comment nous pouvons vous aider à atteindre vos objectifs digitaux.
          </p>
        </div>
      </section>

      {/* Contact Section */}
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
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start'
          }}>
            
            {/* Contact Information */}
            <div>
              <h2 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '24px',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Parlons de votre <span style={{ color: '#3B82F6' }}>Projet</span>
              </h2>
              
              <p style={{
                fontSize: '18px',
                color: '#6B7280',
                marginBottom: '40px',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}>
                Notre équipe d'experts est là pour vous accompagner dans la réalisation de vos projets digitaux. Contactez-nous pour une consultation gratuite.
              </p>

              {/* Contact Methods */}
              <div style={{ marginBottom: '40px' }}>
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
                    marginRight: '16px'
                  }}>
                    <span style={{ fontSize: '24px' }}>📧</span>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#1F2937',
                      marginBottom: '4px',
                      fontFamily: 'Inter, sans-serif'
                    }}>Email</h4>
                    <p style={{
                      color: '#6B7280',
                      fontFamily: 'Inter, sans-serif'
                    }}>contact@affinitywise.com</p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '24px'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px'
                  }}>
                    <span style={{ fontSize: '24px' }}>📱</span>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#1F2937',
                      marginBottom: '4px',
                      fontFamily: 'Inter, sans-serif'
                    }}>Téléphone</h4>
                    <p style={{
                      color: '#6B7280',
                      fontFamily: 'Inter, sans-serif'
                    }}>+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #10B981, #34D399)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px'
                  }}>
                    <span style={{ fontSize: '24px' }}>📍</span>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#1F2937',
                      marginBottom: '4px',
                      fontFamily: 'Inter, sans-serif'
                    }}>Adresse</h4>
                    <p style={{
                      color: '#6B7280',
                      fontFamily: 'Inter, sans-serif'
                    }}>Paris, France</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div style={{
                background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid #F59E0B'
              }}>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#92400E',
                  marginBottom: '8px',
                  fontFamily: 'Inter, sans-serif'
                }}>⚡ Réponse Rapide</h4>
                <p style={{
                  color: '#92400E',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif'
                }}>Nous répondons à tous les messages sous 24h</p>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '24px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              border: '1px solid #E5E7EB'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1F2937',
                marginBottom: '32px',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Envoyez-nous un message
              </h3>

              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '8px',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '16px',
                        border: '2px solid #E5E7EB',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: '#F9FAFB'
                      }}
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '8px',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '16px',
                        border: '2px solid #E5E7EB',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: '#F9FAFB'
                      }}
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '16px',
                      border: '2px solid #E5E7EB',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Inter, sans-serif',
                      backgroundColor: '#F9FAFB'
                    }}
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '16px',
                      border: '2px solid #E5E7EB',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Inter, sans-serif',
                      backgroundColor: '#F9FAFB'
                    }}
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    Entreprise
                  </label>
                  <input
                    type="text"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '16px',
                      border: '2px solid #E5E7EB',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Inter, sans-serif',
                      backgroundColor: '#F9FAFB'
                    }}
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    Service d'intérêt
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '16px',
                      border: '2px solid #E5E7EB',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Inter, sans-serif',
                      backgroundColor: '#F9FAFB',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="consulting">Consulting IT</option>
                    <option value="developpement">Développement Web</option>
                    <option value="design">Design & Création</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '16px',
                      border: '2px solid #E5E7EB',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Inter, sans-serif',
                      backgroundColor: '#F9FAFB',
                      resize: 'vertical'
                    }}
                    placeholder="Décrivez votre projet ou votre besoin..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                    color: 'white',
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: '600',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif',
                    boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.4)',
                    marginTop: '8px'
                  }}
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Message */}
      {confirmation && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
          padding: '32px',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid #E5E7EB',
          maxWidth: '500px',
          textAlign: 'center',
          zIndex: 1000
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #10B981, #34D399)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto'
          }}>
            <span style={{ fontSize: '30px' }}>✅</span>
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#1F2937',
            marginBottom: '12px',
            fontFamily: 'Inter, sans-serif'
          }}>
            Message envoyé !
          </h3>
          <p style={{
            color: '#6B7280',
            lineHeight: '1.5',
            fontFamily: 'Inter, sans-serif'
          }}>
            {confirmation}
          </p>
          <button
            onClick={() => setConfirmation("")}
            style={{
              background: '#3B82F6',
              color: 'white',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '20px',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Fermer
          </button>
        </div>
      )}
    </div>
  );
}

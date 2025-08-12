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
            AffinityWise, l’alliance de l’expertise et de la créativité
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
    </>
  );
};

export default Home;

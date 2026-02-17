import React, { useState, useEffect } from "react";
import {
  FaBookmark,
  FaEnvelope,
  FaFileAlt,
  FaUsers,
  FaHotel,
  FaBuilding,
  FaSignOutAlt,
} from "react-icons/fa";

import "./dashboard.css";

const Dashboard = ({ onGoToHotels, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1200);

  // Détecte le redimensionnement uniquement pour fermer automatiquement sur petit écran
  useEffect(() => {
    const handleResize = () => {
      // Ferme automatiquement la sidebar si on passe en petit écran
      if (window.innerWidth < 1200) {
        setSidebarOpen(false);
      }
      // Ne pas rouvrir automatiquement quand on repasse en grand écran
    };

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stats = [
    {
      id: 1,
      icon: <FaFileAlt />,
      number: "125",
      label: "Formulaires",
      subtitle: "je ne sais pas quoi mettre",
      color: "#9B59B6",
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      number: "40",
      label: "Messages",
      subtitle: "je ne sais pas quoi mettre",
      color: "#1ABC9C",
    },
    {
      id: 3,
      icon: <FaUsers />,
      number: "600",
      label: "Utilisateurs",
      subtitle: "je ne sais pas quoi mettre",
      color: "#F39C12",
    },
    {
      id: 4,
      icon: <FaEnvelope />,
      number: "25",
      label: "E-mails",
      subtitle: "je ne sais pas quoi mettre",
      color: "#E74C3C",
    },
    {
      id: 5,
      icon: <FaHotel />,
      number: "40",
      label: "Hôtels",
      subtitle: "je ne sais pas quoi mettre",
      color: "#9B59B6",
    },
    {
      id: 6,
      icon: <FaBuilding />,
      number: "02",
      label: "Entités",
      subtitle: "je ne sais pas quoi mettre",
      color: "#3498DB",
    },
  ];

  return (
    <div className="dashboard-layout">
      {/* Overlay */}
      {sidebarOpen && window.innerWidth < 1200 && (
        <div
          className="overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <FaBookmark className="sidebar-logo-icon" />
          <span className="sidebar-logo-text">PRODUIT ROUGE</span>
        </div>

        <nav className="sidebar-nav">
          <button className="nav-item active">Dashboard</button>

          <button
            className="nav-item"
            onClick={() => {
              onGoToHotels();
              setSidebarOpen(false);
            }}
          >
            Liste des hôtels
          </button>
        </nav>

        {/* Bloc utilisateur */}
        <div className="sidebar-user">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="user-avatar"
          />

          <div className="user-info">
            <p className="user-name">Aissatou Cisse</p>

            <p className="user-status">
              <span className="status-dot"></span>
              en ligne
            </p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content">
        {/* HEADER COMPLET */}
        <header className="top-header">
          <div className="header-left">
            <h1 className="page-title">Tableau de bord</h1>

            <p className="welcome-text">
              <strong>Bienvenue sur RED Product</strong> <br />
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>

          {/* Notification + Photo + Déconnexion */}
          <div className="header-right">
            {/* Cloche de notification avec badge */}
            <div className="notif-wrapper">
              <span className="notif-icon">🔔</span>
              <span className="notif-badge">3</span>
            </div>

            {/* Photo de profil */}
            <img
              src="https://i.pravatar.cc/50"
              alt="User"
              className="top-avatar"
            />
            
            {/* Bouton de déconnexion */}
            <button 
              className="logout-btn"
              onClick={onLogout}
              title="Se déconnecter"
            >
              <FaSignOutAlt />
            </button>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-card">
                <div
                  className="stat-icon"
                  style={{ backgroundColor: stat.color }}
                >
                  {stat.icon}
                </div>

                <div className="stat-info">
                  <h3 className="stat-number">
                    {stat.number} {stat.label}
                  </h3>
                  <p className="stat-subtitle">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bouton hamburger mobile pour TOGGLE (ouvrir/fermer) la sidebar */}
      <button 
        className="mobile-open-btn" 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{ display: window.innerWidth >= 1200 ? 'none' : 'block' }}
      >
        ☰
      </button>
    </div>
  );
};

export default Dashboard;
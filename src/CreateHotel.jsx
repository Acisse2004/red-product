import React, { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import './dashboard.css';
import './HotelList.css';
import './CreateHotel.css'; // Assure-toi d'inclure ce fichier pour le modal

const HotelList = ({ onGoToDashboard, onCreateHotel, onLogout }) => {
  const [isCreating, setIsCreating] = useState(false);

  const hotels = [
    { id: 1, name: 'Hôtel Terrou-Bi', address: 'Boulevard Martin Luther King Dakar, 11500', price: '25.000 XOF', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop' },
    { id: 2, name: 'King Fahd Palace', address: 'Rue des Almadies, Dakar', price: '20.000 XOF', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop' },
    { id: 3, name: 'Radisson Blu Hotel', address: 'Rue de la Corniche D, Dakar 16868', price: '22.000 XOF', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop' },
    { id: 4, name: 'Pullman Dakar Teranga', address: "Place de l'Indépendance, 10 Rue Pt. 29, Dakar", price: '30.000 XOF', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop' },
    { id: 5, name: 'Hôtel Lac Rose', address: 'Lac Rose, Dakar', price: '25.000 XOF', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop' },
    { id: 6, name: 'Hôtel Saly', address: 'Mbour, Sénégal', price: '20.000 XOF', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop' },
    { id: 7, name: 'Palm Beach Resort & Spa', address: 'BP64, Saly 23000', price: '22.000 XOF', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop' },
    { id: 8, name: 'Pullman Dakar Teranga', address: "Place de l'Indépendance, 10 Rue Pt. 29, Dakar", price: '30.000 XOF', image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=400&h=300&fit=crop' }
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <FaBookmark className="sidebar-logo-icon" />
          <span className="sidebar-logo-text">RED PRODUCT</span>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-section-title">Principal</p>
          <button className="nav-item" onClick={onGoToDashboard}>
            <span className="nav-icon">📊</span>
            <span>Dashboard</span>
          </button>
          <button className="nav-item active">
            <span className="nav-icon">🏨</span>
            <span>Liste des hôtels</span>
          </button>
        </nav>

        {/* Bloc utilisateur */}
        <div className="sidebar-user">
          <img src="https://i.pravatar.cc/40" alt="User" className="user-avatar" />
          <div className="user-info">
            <p className="user-name">Aissatou Cisse</p>
            <p className="user-status">
              <span className="status-dot"></span>
              en ligne
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-header">
          <h1 className="page-title">Liste des hôtels</h1>

          <div className="header-actions">
            <div className="search-box">
              <input type="text" placeholder="Recherche" />
            </div>
            <button
              type="button"
              className="create-hotel-btn"
              onClick={() => setIsCreating(true)}
            >
              + Créer un nouveau hôtel
            </button>
          </div>
        </header>

        {/* Hotels Content */}
        <div className="hotels-content">
          <div className="hotels-header">
            <h2 className="hotels-title">
              Hôtels <span className="hotels-count">{hotels.length}</span>
            </h2>
          </div>

          <div className="hotels-grid">
            {hotels.map(hotel => (
              <div key={hotel.id} className="hotel-card">
                <div className="hotel-image">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=Image+non+disponible';
                    }}
                  />
                </div>
                <div className="hotel-info">
                  <h3 className="hotel-name">{hotel.name}</h3>
                  <p className="hotel-price">{hotel.price} par nuit</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* MODAL DE CRÉATION */}
      {isCreating && (
        <div className="modal-overlay" onClick={() => setIsCreating(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <button
                className="modal-back-btn"
                onClick={() => setIsCreating(false)}
                aria-label="Retour à la liste des hôtels"
              >
                ←
              </button>
              <h2 className="modal-title">CRÉER UN NOUVEAU HÔTEL</h2>
            </div>

            <div className="modal-body">
              <div className="form-row">
                <div className="form-group">
                  <label>Nom de l'hôtel</label>
                  <input type="text" placeholder="CAP Marmiane" />
                </div>
                <div className="form-group">
                  <label>Adresse</label>
                  <input type="text" placeholder="Les îles du saloum, Mar Lodj" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>E-mail</label>
                  <input type="email" placeholder="information@gmail.com" />
                </div>
                <div className="form-group">
                  <label>Numéro de téléphone</label>
                  <input type="tel" placeholder="+221 77 777 77 77" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Prix par nuit</label>
                  <input type="text" placeholder="25.000 XOF" />
                </div>
                <div className="form-group">
                  <label>Devise</label>
                  <select>
                    <option>F XOF</option>
                    <option>USD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>

              <div className="form-group photo-upload">
                <label>Ajouter une photo</label>
                <div className="photo-placeholder">
                  <svg width="56" height="56" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" fill="#F8FAFC"/>
                    <g opacity="0.2">
                      <circle cx="5" cy="5" r="5" fill="#4A5568"/>
                      <circle cx="15" cy="5" r="5" fill="#4A5568"/>
                      <circle cx="25" cy="5" r="5" fill="#4A5568"/>
                      <circle cx="35" cy="5" r="5" fill="#4A5568"/>
                      <circle cx="5" cy="15" r="5" fill="#4A5568"/>
                      <circle cx="15" cy="15" r="5" fill="#4A5568"/>
                      <circle cx="25" cy="15" r="5" fill="#4A5568"/>
                      <circle cx="35" cy="15" r="5" fill="#4A5568"/>
                      <circle cx="5" cy="25" r="5" fill="#4A5568"/>
                      <circle cx="15" cy="25" r="5" fill="#4A5568"/>
                      <circle cx="25" cy="25" r="5" fill="#4A5568"/>
                      <circle cx="35" cy="25" r="5" fill="#4A5568"/>
                      <circle cx="5" cy="35" r="5" fill="#4A5568"/>
                      <circle cx="15" cy="35" r="5" fill="#4A5568"/>
                      <circle cx="25" cy="35" r="5" fill="#4A5568"/>
                      <circle cx="35" cy="35" r="5" fill="#4A5568"/>
                    </g>
                  </svg>
                  <p>Ajouter une photo</p>
                </div>
              </div>

              <button type="submit" className="enregistrer-btn">Enregistrer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelList;

// src/components/Header/Header.jsx

import React from 'react'
import './Header.css'
import profilePhoto from '../../assets/Screenshot 2025-05-25 010930.png'


export default function Header() {
  return (
    <header className="header">
      <div className="logo">Healthcare<span className="dot">.</span></div>

      <div className="search-bar">
        <input type="text" placeholder="Search here..." disabled />
        <span className="search-icon">🔍</span>
      </div>

      <div className="header-actions">
        <span className="add-button">＋</span>
        <span className="notification-icon">🔔</span>
        <div className="user-profile">
          <img
            src={profilePhoto}
            alt="User Avatar"
            className="avatar"
          />
          <span className="username">Sharath</span>
        </div>
      </div>
    </header>
  )
}

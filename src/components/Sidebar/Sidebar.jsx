// src/components/Sidebar/Sidebar.jsx

import React from 'react'
import './Sidebar.css'
import navLinks from '../../data/navLinks'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">General</h2>
      <ul className="nav-links">
        {navLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <span className="nav-icon">{link.icon}</span>
            <span className="nav-text">{link.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

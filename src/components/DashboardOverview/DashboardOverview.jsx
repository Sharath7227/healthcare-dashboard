// src/components/DashboardOverview/DashboardOverview.jsx

import React from 'react'
import './DashboardOverview.css'

//static data to show the records

const stats = [
  { title: 'Appointments', count: 12, color: '#3b82f6' },
  { title: 'Patients', count: 8, color: '#10b981' },
  { title: 'Tests', count: 5, color: '#f59e0b' }
]

export default function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      {stats.map((item, index) => (
        <div className="overview-card" key={index} style={{ borderLeft: `6px solid ${item.color}` }}>
          <div className="overview-count">{item.count}</div>
          <div className="overview-title">{item.title}</div>
        </div>
      ))}
    </div>
  )
}

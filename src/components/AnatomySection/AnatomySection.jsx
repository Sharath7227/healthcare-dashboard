// src/components/AnatomySection/AnatomySection.jsx

import React from 'react'
import './AnatomySection.css'
import humanBodyImage from '../../assets/human-body-frontal_1048-5345.jpg'

//assigning the static color to indicate the condition of below BodyParts
const indicators = [
  { label: 'Healthy Heart', status: 'Good', color: '#10b981' },
  { label: 'Lungs', status: 'Attention', color: '#ef4444' },
  { label: 'Teeth', status: 'Checkup Due', color: '#f59e0b' },
  { label: 'Bone', status: 'Stable', color: '#3b82f6' }
]

export default function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img
        src={humanBodyImage}
        alt="Human Body"
        className="anatomy-image"
      />

      <div className="health-indicators">
        {indicators.map((item, index) => (
          <div className="health-indicator-card" key={index}>
            <div className="indicator-dot" style={{ backgroundColor: item.color }}></div>
            <div>
              <div className="indicator-label">{item.label}</div>
              <div className="indicator-status">{item.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

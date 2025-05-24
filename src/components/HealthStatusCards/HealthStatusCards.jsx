import React from 'react';
import './HealthStatusCards.css';

// static data 
const healthStatuses = [
  { id: 1, title: 'Teeth', status: 'good', color: '#4CAF50' },       // Green
  { id: 2, title: 'Bone', status: 'caution', color: '#FFC107' },     // Yellow
  { id: 3, title: 'Heart', status: 'alert', color: '#F44336' },      // Red
  { id: 4, title: 'Lungs', status: 'good', color: '#4CAF50' },       // Green
];

const HealthStatusCard = ({ title, color }) => {
  return (
    <div className="health-card" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
    </div>
  );
};

const HealthStatusCards = () => {
  return (
    <div className="health-cards-container">
      {healthStatuses.map(({ id, title, color }) => (
        <HealthStatusCard key={id} title={title} color={color} />
      ))}
    </div>
  );
};

export default HealthStatusCards;

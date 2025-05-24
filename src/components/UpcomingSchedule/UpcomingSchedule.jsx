import React from 'react';
import './UpcomingSchedule.css';

const scheduleData = [
  {
    id: 1,
    title: 'Dental Checkup',
    datetime: '2025-05-28 10:30 AM',
    doctor: 'Dr. Smith',
  },
  {
    id: 2,
    title: 'Physiotherapy Session',
    datetime: '2025-05-30 03:00 PM',
    doctor: 'Dr. Lee',
  },
  {
    id: 3,
    title: 'Annual Blood Test',
    datetime: '2025-06-02 09:00 AM',
    doctor: 'LabCorp Center',
  },
];

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule-container">
      <h2>Upcoming Schedule</h2>
      {scheduleData.length === 0 ? (
        <p className="no-schedule">No upcoming events.</p>
      ) : (
        <ul className="schedule-list">
          {scheduleData.map(({ id, title, datetime, doctor }) => (
            <li key={id} className="schedule-item">
              <div className="schedule-info">
                <h3>{title}</h3>
                <p>{datetime}</p>
                <p className="doctor">with {doctor}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingSchedule;

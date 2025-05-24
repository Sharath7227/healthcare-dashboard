import React from 'react';
import './ActivityFeed.css';

const activityData = [
  {
    id: 1,
    message: 'Completed 30-minute cardio session',                  //static sample data 
    timestamp: '2025-05-25 07:30 AM',
  },
  {
    id: 2,
    message: 'Uploaded dental X-ray',                               //static sample data
    timestamp: '2025-05-24 06:15 PM',
  },
  {
    id: 3,
    message: 'Logged blood pressure: 120/80',                       //static sample data
    timestamp: '2025-05-24 08:45 AM',
  },
];

const ActivityFeed = () => {
  return (
    <div className="activity-feed-container">
      <h2>Activity Feed</h2>
      {activityData.length === 0 ? (
        <p className="no-activity">No recent activity.</p>
      ) : (
        <ul className="activity-feed-list">
          {activityData.map(({ id, message, timestamp }) => (
            <li key={id} className="activity-feed-item">
              <div className="activity-content">
                <p className="activity-message">{message}</p>
                <span className="activity-timestamp">{timestamp}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivityFeed;

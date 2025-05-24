// src/components/DashboardMainContent/DashboardMainContent.jsx

import React from 'react'
import './DashboardMainContent.css'
import DashboardOverview from '../DashboardOverview/DashboardOverview'
import AnatomySection from '../AnatomySection/AnatomySection'
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards'
import CalendarView from '../CalendarView/CalendarView'
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule'
import ActivityFeed from '../ActivityFeed/ActivityFeed'

//this is the main page, here we import all the containers to display the content.

export default function DashboardMainContent() {
  return (
    <div className="dashboard-main-content">
      <DashboardOverview />
      <div className="main-grid">
        <div className="left-section">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className="right-section">
          <CalendarView />
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import './styles/App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent'

export default function App() {
  return (

    <div className="app">
      <Sidebar />
      <Header />
      <main className="main-content">
        <DashboardMainContent />
        {/* We’ll build this next */}
      </main>
    </div>

  )
}

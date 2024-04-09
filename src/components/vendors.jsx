import React from 'react'
import Sidebar from './DashBoardSidebar'
export default function Vendors() {
  return (
    <>
    <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Manage Vendors</h2>
        </div>
      </div>
    </>
  )
}

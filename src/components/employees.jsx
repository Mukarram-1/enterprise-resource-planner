import React from 'react'
import Sidebar from './DashBoardSidebar'
export default function Employees() {
  return (
    <>
    <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Manage Employees</h2>
        </div>
      </div>
    </>
  )
}

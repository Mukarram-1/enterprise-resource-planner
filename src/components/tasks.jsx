import React from 'react'
import Sidebar from "./DashBoardSidebar";
export default function Tasks() {
  return (
    <>
    <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Manage Tasks</h2>
        </div>
      </div>
    </>
  )
}

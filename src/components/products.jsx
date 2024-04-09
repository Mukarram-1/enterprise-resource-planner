import React from 'react'
import Sidebar from "./DashBoardSidebar";
export default function Products() {
  return (
    <>
    <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Manage Products</h2>
        </div>
      </div>
    </>
  )
}

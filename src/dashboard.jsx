import React from 'react'
import Sidebar from './components/DashBoardSidebar'
export default function Dashboard() {
  return (
   <>
   <div className="sidebar">
    <Sidebar/>
   </div>
   <div className="dashbody">
    <h1>Hello</h1>
   </div>
   </>
  )
}

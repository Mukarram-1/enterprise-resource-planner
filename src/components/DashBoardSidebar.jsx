import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';
export default function Sidebar({ onSidebarItemClick }) {
  return (
    <div className="sidebar">
     <h2 style={{textAlign:"center"}}>ERP</h2>
      <div className="sidebar-item">
        <DashboardIcon/>
        <Link to="/dashboard"><span>Dashboard</span></Link>
      </div>
      <div className="sidebar-item">
        <PersonIcon/>
        <Link to="/employees"><span>Employees</span></Link>
      </div>
      <div className="sidebar-item">
        <AssignmentIcon/>
        <Link to="/tasks"><span>Tasks</span></Link>
      </div>
      <div className="sidebar-item">
        <InventoryIcon/>
       <Link to="/products"> <span>Products</span></Link>
      </div>
      <div className="sidebar-item">
        <StoreIcon/>
        <Link to="/vendors"><span>Vendors</span></Link>
      </div>
    </div>
  );
}

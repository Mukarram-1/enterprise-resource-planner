import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

export default function Sidebar({ onSidebarItemClick }) {
  return (
    <div className="sidebar">
     <h2 style={{textAlign:"center"}}>ERP</h2>
      <div className="sidebar-item">
        <DashboardIcon/>
        <Link style={{width:"100%"}} to="/dashboard"><span>Dashboard</span></Link>
      </div>
      <div className="sidebar-item">
        <PersonIcon/>
        <Link style={{width:"100%"}} to="/employees"><span>Employees</span></Link>
      </div>
      <div className="sidebar-item">
        <AssignmentIcon/>
        <Link style={{width:"100%"}} to="/tasks"><span>Tasks</span></Link>
      </div>
      <div className="sidebar-item">
        <CategoryIcon/>
       <Link style={{width:"100%"}} to="/products"> <span>Products</span></Link>
      </div>
      <div className="sidebar-item">
        <StoreIcon/>
        <Link style={{width:"100%"}} to="/vendors"><span>Vendors</span></Link>
      </div>
      <div className="sidebar-item">
        <ProductionQuantityLimitsIcon/>
        <Link to="/rawmaterials"><span>Raw Materials</span></Link>
      </div>
      <div className="sidebar-item">
        <ListAltIcon/>
        <Link style={{width:"100%"}} to="/orders"><span>Orders</span></Link>
      </div>
      <div className="sidebar-item">
        <InventoryIcon/>
        <Link style={{width:"100%"}} to="/inventory"><span>Inventory</span></Link>
      </div>
    </div>
  );
}

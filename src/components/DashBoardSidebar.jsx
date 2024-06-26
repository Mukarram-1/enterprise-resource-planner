import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import OutboxIcon from '@mui/icons-material/Outbox';

export default function Sidebar() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetchUserRole();
  }, []);

  const fetchUserRole = () => {
    fetch('http://localhost:4000/dashboardUserCheck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    })
    .then(userData => {
      setUsername(userData.username);
    })
    .catch(error => {
      console.error('Loading...');
    });
  };

  return (
    <div className="sidebar">
     <h2 style={{textAlign:"center"}}>ERP</h2>
      {username === 'admin' && (
        <>
          <div className="sidebar-item">
          <DashboardIcon/>
          <Link style={{width:"100%"}} to="/dashboard"><span>Dashboard</span></Link>
          </div>
          <div className="sidebar-item">
            <PersonIcon/>
            <Link style={{width:"100%"}} to="/employees"><span>Employees</span></Link>
          </div>
        </>
      )}
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
      {username === 'admin' && (
        <>
        <div className="sidebar-item">
          <ProductionQuantityLimitsIcon/>
          <Link to="/rawmaterials"><span>Raw Materials</span></Link>
        </div>
        <div className="sidebar-item">
          <ListAltIcon/>
          <Link style={{width:"100%"}} to="/orders"><span>Orders</span></Link>
        </div>
        </>
      )}
      {username === 'manager' && (
        <div className="sidebar-item">
          <OutboxIcon/>
          <Link style={{width:"100%"}} to="/requestRawMaterials"><span>Request Orders</span></Link>
        </div>
      )}
      <div className="sidebar-item">
        <InventoryIcon/>
        <Link style={{width:"100%"}} to="/inventory"><span>Inventory</span></Link>
      </div>
      <div className="sidebar-item">
        <ThumbUpOffAltIcon/>
        <Link style={{width:"100%"}} to="/ProductRating"><span>Product Rating</span></Link>
      </div>
      <div className="sidebar-item" style={{width:"90%", bottom:'0', position:'absolute'}}>
        <ExitToAppIcon/>
        <Link style={{width:"100%"}} to="/"><span>Sign out</span></Link>
      </div>
    </div>
  );
}
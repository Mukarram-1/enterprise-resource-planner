import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ onSidebarItemClick }) {
  return (
    <div className='sidebar'>
      <div className="sidebar-logo">
        <p>Banker.</p>
      </div>
      <div className='sidelinks'>
        <Link to="#" onClick={() => onSidebarItemClick('UserPortal')} className='sidebar-item'>
          <img src="home-1-svgrepo-com.svg" alt="Dashboard Icon" />
          Dashboard
        </Link>
        <Link to="#" onClick={() => onSidebarItemClick('Transactions')} className='sidebar-item'>
          <img src="ecommerce-shop-transaction-svgrepo-com.svg" alt="Transactions Icon" />
          Transactions
        </Link>
        <Link to="#" onClick={() => onSidebarItemClick('Payments')} className='sidebar-item'>
          <img src="receive-square-svgrepo-com.svg" alt="Payments Icon" />
          Payments
        </Link>
        <Link to="#" onClick={() => onSidebarItemClick('Settings')} className='sidebar-item'>
          <img src="setting-2-svgrepo-com.svg" alt="Settings Icon" />
          Settings
        </Link>
      </div>
      <div className='logout-button'>
        <Link to="Signin" className='sidebar-item'>
          <img src="logout-3-svgrepo-com.svg" alt="Logout Icon" />
          Logout
        </Link>
      </div>
    </div>
  )
}
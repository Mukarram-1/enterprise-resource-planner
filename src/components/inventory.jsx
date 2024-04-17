import React, { useState, useEffect } from 'react';
import './table.css';
import Sidebar from './DashBoardSidebar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

function Inventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch('http://localhost:4000/getInventory');
        if (!response.ok) {
          throw new Error('Failed to fetch inventory');
        }
        const data = await response.json();
        setItems(data);
        console.log('Data Read:', data);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="main">
        <h2>Manage Inventory</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Item Code</th>
              <th>Item Name</th>
              <th>Quantity on Hand</th>
              <th>Reorder Level</th>
              <th>Unit Cost</th>
              <th>Total Value</th>
              <th>Last Updated</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.reorderLevel}</td>
                <td>{item.cost}</td>
                <td>{item.value}</td>
                <td>{item.lastUpdated}</td>
                <td>
                  <Link>
                    <EditIcon style={{ fontSize: '20px', color: 'green' }} />
                  </Link>
                </td>
                <td>
                  <Link>
                    <DeleteForeverIcon style={{ fontSize: '20px', color: 'red' }} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;
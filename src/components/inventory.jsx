import React, { useState, useEffect } from 'react';
import './table.css';
import Sidebar from './DashBoardSidebar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import PieChart from "./pieChart";

function Inventory() {
  const [items, setItems] = useState([]);
  const [raw_materials, setRawMaterials] = useState([]);
  const [products, setProducts] = useState([]);

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

        const rawMaterials = data.filter(item => item.type === 'Raw Material');
        const products = data.filter(item => item.type === 'Product');
        setRawMaterials(rawMaterials);
        setProducts(products);
      }
      catch (error) {
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
        <div className="pie-chart">
          <div className='chart'>
            <h3>Raw Material Quantity Distribution</h3>
            <PieChart rawMaterials={raw_materials} />
          </div>
          <div className='chart'>
            <h3>Products Quantity Distribution</h3>
            <PieChart rawMaterials={products} />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Unit Cost</th>
              <th>Category</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.cost}</td>
                <td>{item.category}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;
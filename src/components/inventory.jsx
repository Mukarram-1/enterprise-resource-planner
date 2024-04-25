import React, { useState, useEffect } from 'react';
import './table.css';
import Sidebar from './DashBoardSidebar';
import PieChart from "./pieChart";

function Inventory() {
  const [items, setItems] = useState([]);
  const [rawMaterials, setRawMaterials] = useState([]);
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

        const rawMaterialsData = data.filter(item => item.Type === "Raw Material");
        const productsData = data.filter(item => item.Type === "Product");
        console.log("Products Data",productsData);
        setRawMaterials(rawMaterialsData);
        setProducts(productsData);
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
            <PieChart rawMaterials={rawMaterials} />
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
                <td>{item["Item ID"]}</td>
                <td>{item["Item Name"]}</td>
                <td>{item["Quantity"]}</td>
                <td>{item["Unit Cost"]}</td>
                <td>{item["Category"]}</td>
                <td>{item["Type"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;

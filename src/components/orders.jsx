import React, { useState, useEffect } from "react";
import './table.css';
import Sidebar from "./DashBoardSidebar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:4000/getOrders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
        console.log("Data Read:", data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className='main'>
        <div className="manageheading">
          <h2>Manage Orders</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Vendor ID</th>
              <th>Order Date</th>
              <th>Order Status</th>
              <th>Amount</th>
              <th>Shipping Address</th>
              <th>Payment Status</th>
              <th>Delivery Date</th>
              <th>Order Details</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.vendor_id}</td>
                <td>{order.order_date}</td>
                <td>{order.order_status}</td>
                <td>{order.amount}</td>
                <td>{order.shipping_address}</td>
                <td>{order.payment_status}</td>
                <td>{order.delivery_date}</td>
                <td>{order.order_details}</td>
                <td><Link><EditIcon style={{ fontSize: "20px" ,color:'green'}}/></Link></td>
                <td><Link><DeleteForeverIcon style={{ fontSize: "20px" ,color:'red'}}/></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
import React, { useState, useEffect } from "react";
import './table.css';
import Sidebar from "./DashBoardSidebar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import UpdateOrdersModal from "./updateorders";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
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

  const handleEdit = (order) => {
    setSelectedOrder(order); // Set the selected employee when edit icon is clicked
    openModal(); // Open the modal
  };

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
              <th>Order ID</th>
              <th>Vendor</th>
              <th>Material</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Shipping Status</th>
              <th>Payment Status</th>
              <th>Order Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.vendor_name}</td>
                <td>{order.material}</td>
                <td>{order.quantity}</td>
                <td>{order.amount}</td>
                <td>{order.shipping_status}</td>
                <td>{order.payment_status}</td>
                <td>{order.order_date}</td>
                {/* <td>{order.order_details}</td> */}
                <td><Link><EditIcon onClick={() => handleEdit(order)} style={{ fontSize: "20px" ,color:'green'}}/></Link></td>
                {/* <td><Link><DeleteForeverIcon style={{ fontSize: "20px" ,color:'red'}}/></Link></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdateOrdersModal
        isOpen={isModalOpen}
        onClose={closeModal}
        order={selectedOrder}
      />
    </div>
  );
}

export default Orders;
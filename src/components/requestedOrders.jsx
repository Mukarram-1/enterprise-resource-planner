import React, { useState, useEffect } from "react";
import "./table.css";
import Sidebar from "./DashBoardSidebar";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Link } from "react-router-dom";

function RequestedOrders() {
  const [requestedOrders, setRequestedOrders] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetchRequestedOrders();
  }, []);

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
  
  const fetchRequestedOrders = async () => {
    try {
      const response = await fetch("http://localhost:4000/getRequests");
      if (!response.ok) {
        throw new Error("Failed to fetch RequestedOrders");
      }
      const data = await response.json();
      setRequestedOrders(data);
      console.log("Data Read:", data);
    } catch (error) {
      console.error("Error fetching Requested Orders:", error);
    }
  };

  const handleAction = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:4000/updateRequests/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });
      if (!response.ok) {
        throw new Error("Failed to update request status");
      }
      fetchRequestedOrders();
    } catch (error) {
      console.error("Error updating request status:", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="main">
        <div className="manageheading">
          <h2>Manage Requested Orders</h2>
        </div>
        <div className="tableportion">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Status</th>
                {username === 'admin' && (
                  <>
                    <th>Approve</th>
                    <th>Reject</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {requestedOrders.map((requestedOrder) => ( // Use requestedOrders instead of RequestedOrders
                <tr key={requestedOrder.id}>
                  <td>{requestedOrder.id}</td>
                  <td>{requestedOrder.name}</td>
                  <td>{requestedOrder.quantity}</td>
                  <td>{requestedOrder.description}</td>
                  <td>{requestedOrder.status}</td>
                    {username === 'admin' && (
                      <>
                        <td>
                          <Link onClick={() => handleAction(requestedOrder.id, 'approved')}>
                            <CheckCircleOutlineIcon
                              style={{ fontSize: "20px", color: "green" }}
                            />
                          </Link>
                        </td>
                        <td>
                          <Link onClick={() => handleAction(requestedOrder.id, 'rejected')}>
                            <CancelOutlinedIcon style={{ fontSize: "20px", color: "red" }}/>
                          </Link>
                        </td>
                      </>
                    )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RequestedOrders;
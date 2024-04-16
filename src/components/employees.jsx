import React, { useState } from "react";
import "./table.css";
import Sidebar from "./DashBoardSidebar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import ModalForm from "./employeeform";

function Employees() {
  const customers = [
    {
      id: "1",
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
      address: "123 Main Street, City, Country",
    },
    {
      id: "2",
      name: "Abdullah Tahir",
      phone: "987-654-3210",
      email: "abdullah@example.com",
      address: "456 Elm Street, Town, Country",
    },
    {
      id: "3",
      name: "Mukarram Ahmad",
      phone: "987-654-3210",
      email: "mukarram@example.com",
      address: "456 Elm Street, Town, Country",
    },
    {
      id: "4",
      name: "Usman Ramzan",
      phone: "987-654-3210",
      email: "Usman@example.com",
      address: "456 Elm Street, Town, Country",
    },
    {
      id: "5",
      name: "Noman Javed",
      phone: "987-654-3210",
      email: "nomijaved@example.com",
      address: "456 Elm Street, Town, Country",
    },
    {
      id: "6",
      name: "Noman Goraya",
      phone: "987-654-3210",
      email: "goraya@example.com",
      address: "456 Elm Street, Town, Country",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Sidebar />
      <div className="main">
        <div className="manageheading">
          <h2>Manage Employees</h2>
          <div className="modalbtn">
            <button onClick={openModal}>Add Employee</button>
            <ModalForm isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
        <div className="tableportion">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                  <td>{customer.address}</td>
                  <td>
                    <Link>
                      <EditIcon style={{ fontSize: "20px", color: "green" }} />
                    </Link>
                  </td>
                  <td>
                    <Link>
                      <DeleteForeverIcon
                        style={{ fontSize: "20px", color: "red" }}
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employees;

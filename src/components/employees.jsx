import React, { useState, useEffect } from "react";
import "./table.css";
import Sidebar from "./DashBoardSidebar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import ModalForm from "./employeeform";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:4000/getEmployees");
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }
        const data = await response.json();
        setEmployees(data);
        console.log("Data Read:", data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

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
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
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
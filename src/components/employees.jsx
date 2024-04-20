import React, { useState, useEffect } from "react";
import "./table.css";
import Sidebar from "./DashBoardSidebar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import ModalForm from "./employeeform";
import UpdateEmployeeModal from "./updateemployeeform";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State to track the selected employee for editing

  const openaddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeaddModal = () => {
    setIsAddModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null); // Reset selected employee when modal closes
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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/deleteemployee/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
      } else {
        console.error('Failed to delete employee from the database');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee); // Set the selected employee when edit icon is clicked
    openModal(); // Open the modal
  };

  return (
    <div>
      <Sidebar />
      <div className="main">
        <div className="manageheading">
          <h2>Manage Employees</h2>
          <div className="modalbtn">
            <button onClick={openaddModal}>Add Employee</button>
            <ModalForm isOpen={isAddModalOpen} onClose={closeaddModal} />
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
                      <EditIcon
                        onClick={() => handleEdit(employee)} // Pass the employee data to handleEdit
                        style={{ fontSize: "20px", color: "green" }}
                      />
                    </Link>
                  </td>
                  <td>
                    <Link>
                      <DeleteForeverIcon onClick={() => handleDelete(employee.id)}
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
      <UpdateEmployeeModal // Render the UpdateEmployeeModal component
        isOpen={isModalOpen}
        onClose={closeModal}
        employee={selectedEmployee} // Pass the selected employee data to the modal
      />
    </div>
  );
}

export default Employees;

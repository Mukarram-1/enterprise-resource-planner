import React, { useState, useEffect } from 'react';
import './ModalForm.css'; 

const TaskModalForm = ({ isOpen, onClose }) => {
  const [employeeNames, setEmployeeNames] = useState([]);
  useEffect(() => {
    const fetchEmployeeNames = async () => {
      try {
        const response = await fetch('http://localhost:4000/getemployees');
        if (response.ok) {
          const data = await response.json();
          // Extracting names from the received data and setting the state
          const names = data.map(employee => employee.name);
          setEmployeeNames(names);
        } else {
          console.error('Failed to fetch employee names');
        }
      } catch (error) {
        console.error('Error fetching employee names:', error);
      }
    };
    fetchEmployeeNames();
  }, []);

  const handleSubmit = (e) => {
    if(document.getElementById("name").value!=="")
    {
      alert("Task Added");
    }
    console.log("Task added");
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit} action="http://localhost:4000/addtask" method="post">
          <div className="form-group">
            <h2 style={{textAlign:'center'}}>Add New Task</h2>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="assignedTo">Assigned To:</label>
            <select
              id="assignedTo"
              name="assignedTo"
            >
              <option value="">Select Employee...</option>
              {employeeNames.map((name, index) => (
                <option key={index} value={name}>{name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
            >
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TaskModalForm;

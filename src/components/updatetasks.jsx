import React, { useState, useEffect } from "react";
import "./UpdateForm.css";

function UpdateTasksModal({ isOpen, onClose, task }) {
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

  const [name, setName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (task) {
      setName(task.task_name);
      setAssignedTo(task.assigned_to);
      setDescription(task.description);
      setStatus(task.status);
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/updatetasks/${task.id}`, {
        method: 'POST',
        body: JSON.stringify({
          name,
          assignedTo,
          description,
          status
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log("Employee Updated!");
        window.location.href = 'http://localhost:3000/tasks';
      } else {
        console.error('Failed to update employee in the database');
      }
    } catch (error) {
      console.error('Error updating employee:', error);
    }
    if (document.getElementById("name").value !== "") {
        alert("Task Updated Successfully!");
      }
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 style={{textAlign:'center'}}>Update Task</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state
              />
            </div>
            <div className="form-group">
              <label>Assigned To:</label>
              <select
              id="assignedTo"
              name="assignedTo"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            >
              {employeeNames.map((name, index) => (
                <option key={index} value={name}>{name}</option>
              ))}
            </select>
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} // Update email state
              />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <select
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    )
  );
}

export default UpdateTasksModal;

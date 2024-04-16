import React, { useState } from 'react';
import './ModalForm.css'; 

const TaskModalForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    assignedto: '',
    description: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, for example: send formData to an API
    console.log(formData);
    // Close the modal after submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <div className="form-group">
            <h2 style={{textAlign:'center'}}>Add New Task</h2>
          </div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="assignedto">Assigned To:</label>
            <input
              type="text"
              id="assignedto"
              name="assignedto"
              value={formData.assignedto}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TaskModalForm;

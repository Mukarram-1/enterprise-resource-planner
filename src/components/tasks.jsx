import React, { useState } from "react";
import './table.css';
import Sidebar from "./DashBoardSidebar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import TaskModalForm from "./taskmodalform";

function Tasks() {
  const tasks = [
    {
      id: '1',
      taskName: 'Task 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi vitae scelerisque consectetur.',
      assignedTo: 'John Doe',
      status: 'In Progress'
    },
    {
      id: '2',
      taskName: 'Task 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      assignedTo: 'Jane Smith',
      status: 'Completed'
    },
    {
      id: '3',
      taskName: 'Task 3',
      description: 'Nulla facilisi. Ut nec felis nec urna fermentum commodo. Proin gravida odio at aliquam.',
      assignedTo: 'Michael Johnson',
      status: 'Pending'
    }
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
      <div className='main'>
        <div className="manageheading">
          <h2>Manage Tasks</h2>
          <div className="modalbtn">
            <button onClick={openModal}>Add Task</button>
            <TaskModalForm isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task Name</th>
              <th>Assigned To</th>
              <th>Description</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.id}</td>
                <td>{task.taskName}</td>
                <td>{task.assignedTo}</td>
                <td style={{maxWidth:'400px'}}>{task.description}</td>
                <td>{task.status}</td>
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

export default Tasks;

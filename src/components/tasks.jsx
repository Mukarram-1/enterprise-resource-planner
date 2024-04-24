import React, { useState, useEffect } from "react";
import './table.css';
import Sidebar from "./DashBoardSidebar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import TaskModalForm from "./taskmodalform";
import UpdateTasksModal from "./updatetasks";
import toast, { Toaster } from 'react-hot-toast';
function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

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
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:4000/getTasks");
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await response.json();
        setTasks(data);
        console.log("Data Read:", data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/deletetask/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        toast.success('Task deleted successfully!');
      } else {
        console.error('Failed to delete vendor from the database');
        toast.error('Task could not delete.');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEdit = (task) => {
    setSelectedTask(task); // Set the selected employee when edit icon is clicked
    openModal(); // Open the modal
  };

  return (
    <div>
      <Sidebar />
      <div className='main'>
        <div className="manageheading">
          <h2>Manage Tasks</h2>
          <div className="modalbtn">
            <button onClick={openaddModal}>Add Task</button>
            <TaskModalForm isOpen={isAddModalOpen} onClose={closeaddModal} />
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
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.task_name}</td>
                <td>{task.assigned_to}</td>
                <td style={{ maxWidth: '400px' }}>{task.description}</td>
                <td>{task.status}</td>
                <td><Link><EditIcon onClick={() => handleEdit(task)}
                  style={{ fontSize: "20px", color: 'green' }} /></Link></td>
                <td><Link><DeleteForeverIcon onClick={() => handleDelete(task.id)} style={{ fontSize: "20px", color: 'red' }} />
                  <Toaster
                    position="top-center"
                    reverseOrder={false}
                  />
                </Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdateTasksModal // Render the UpdateEmployeeModal component
        isOpen={isModalOpen}
        onClose={closeModal}
        task={selectedTask} // Pass the selected employee data to the modal
      />
    </div>
  );
}

export default Tasks;
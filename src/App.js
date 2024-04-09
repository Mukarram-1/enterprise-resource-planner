import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard';
import Vendors from './components/vendors';
import Employees from './components/employees';
import Tasks from './components/tasks';
import Products from './components/products';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/products" element={<Products />} />
        
      </Routes>
    </div>
  );
}

export default App;

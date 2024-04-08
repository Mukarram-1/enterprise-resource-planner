import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './dashboard';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

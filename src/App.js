import './App.css';
import Register from './Component/Register';
import Login from './Component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  
import Dashboard from './Component/Dashboard';
import Forget from './Component/Forget';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/forget' element={<Forget />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

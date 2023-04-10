import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
    
    
    // <div className="App">
    //   <h1>Hello This is RTK TypeScript Authentication with JWT Token</h1>
    // </div>
    
  );
}

export default App;

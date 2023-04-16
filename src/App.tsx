import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './components/SignUp';
import Notification from './components/Notification';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<ProtectedRoute component={Home} />} />
        <Route path='/notification' element={<ProtectedRoute component={Notification} />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

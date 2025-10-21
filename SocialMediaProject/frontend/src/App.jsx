import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast'; // --- (1) Import Toaster ---
import './App.css';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {/* --- (2) Add Toaster component here --- */}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
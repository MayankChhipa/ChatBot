// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { HomePage } from './components/HomePage';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { ProtectedRoute, PublicRoute } from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="HomePage" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App

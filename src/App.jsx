// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { HomePage } from './components/HomePage';
import { Login } from './components/Login';
import './App.css';

function App() {



  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="HomePage" element={<HomePage />} />
      </Routes>
    </>
  );

}

export default App

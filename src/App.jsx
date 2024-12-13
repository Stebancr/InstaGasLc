import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Calentadores from './pages/Calentadores';
import Servicios from './pages/Servicios';
import Instalaciones from './pages/Instalaciones';





const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Calentadores" element={<Calentadores />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Instalaciones" element={<Instalaciones />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import '../components/Styles/Servicios.css'
import authService from '../services/authService.js';


const Servicios = () => {
  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit" onClick={handleBack} className="btn">Register</button>
      </form>
    </div>
  );
};

export default Servicios;

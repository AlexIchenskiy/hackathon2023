import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home.js';
import Login from './pages/LogIn/Login.js';
import Signup from './pages/SignUp/Signup.js';
import Dashboard from "./pages/Dashboard/Dashboard";
import ThreatIntelligence from './components/ThreatIntelligence/ThreatIntelligence.js';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/threat' element={<ThreatIntelligence />} />
    </Routes>
  )
}

export default App;

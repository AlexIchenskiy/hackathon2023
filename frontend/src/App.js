import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Login from './pages/LogIn/Login';
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return(
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App;

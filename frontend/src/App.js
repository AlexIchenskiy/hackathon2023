import Home from "./pages/Home/Home";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/LogIn/Login";
import Signup from "./pages/SignUp/Signup";

function App() {
  
 return(
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
</Routes>
 )
}

export default App;

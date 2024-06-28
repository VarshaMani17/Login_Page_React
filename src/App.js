import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm"
import Home from "./Components/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Login" element={<LoginForm />} />
       <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

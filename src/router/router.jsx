import React from "react";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import LogOut from "../pages/auth/LogOut";
import Register from "../pages/auth/Register";
import Header from "../components/parts/Header";
import { Routes, Route } from "react-router-dom";
const Router = () => {
  return (
  <>
  <Header/>
  <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path='/logout' element={<LogOut/>} />

      <Route path="/" element={<Home />} />
    </Routes>
  </>
  );
};

export default Router;

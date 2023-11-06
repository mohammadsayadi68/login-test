import React from "react";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import LogOut from "../pages/auth/LogOut";
import Register from "../pages/auth/Register";
import Header from "../components/parts/Header";
import { Routes, Route } from "react-router-dom";
import Protected from "../components/protected";
import Tasks from "../pages/tasks/Tasks";
import BackLog from "../pages/tasks/BackLog";
import InProgress from "../pages/tasks/InProgress";
import Done from "../pages/tasks/Done";
import AllTask from "../pages/tasks/AllTask";
const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Protected />}>
          <Route path="/tasks" element={<Tasks />}>
            <Route path="backlog" element={<BackLog />} />
            <Route path="allTasks" element={<AllTask />} />
            <Route path="inprogress" element={<InProgress />} />
            <Route path="done" element={<Done />} />
          </Route>
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Router;

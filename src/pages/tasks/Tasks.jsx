import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
const Tasks = () => {
  return (
    <div className="">
      <h1>task manager</h1>
      <NavLink to="/tasks/allTasks" className="btn btn-info m-3">
        all tasks
      </NavLink>
      <NavLink to="/tasks/backlog" className="btn btn-info m-3">
        backlog
      </NavLink>
      <NavLink to="/tasks/inprogress" className="btn btn-info m-3">
        inprogress
      </NavLink>
      <NavLink to="/tasks/done" className="btn btn-info m-3">
        done
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Tasks;

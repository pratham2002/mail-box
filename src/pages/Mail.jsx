import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Mail() {
  return (
    <div>
      <nav className="sideNav bg-white">
        <NavLink className="nav-link bg-white" to="/inbox">
          Inbox
        </NavLink>
        <NavLink className="nav-link bg-white" to="/spam">
          Spam
        </NavLink>
        <NavLink className="nav-link bg-white" to="/trash">
          Trash
        </NavLink>
      </nav>{" "}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

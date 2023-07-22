import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Mail() {
  return (
    <div>
      <nav className="sideNav">
        <NavLink className="nav-link" to="/inbox">
          Inbox
        </NavLink>
        <NavLink className="nav-link" to="/spam">
          Spam
        </NavLink>
        <NavLink className="nav-link" to="/trash">
          Trash
        </NavLink>
      </nav>{" "}
      <div
        style={{
          left: "13%",
          position: "fixed",
          border: "1px solid red",
          maxWidth: "80%",
          margin: "auto",
        }}
      >
        <h3>Outlet Info</h3>

        <Outlet />
      </div>
    </div>
  );
}

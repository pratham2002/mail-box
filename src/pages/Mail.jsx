import React from "react";
import { Outlet } from "react-router-dom";

export default function Mail() {
  return (
    <div>
      Mail
      <div style={{ border: "1px solid red", maxWidth: "80%", margin: "auto" }}>
        <h3>Outlet Info</h3>

        <Outlet />
      </div>
    </div>
  );
}

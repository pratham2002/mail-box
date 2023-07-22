import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Outlet } from "react-router-dom";

export default function Home() {
  const { userDetails } = useContext(UserContext);

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>Home</div>
      {userDetails?.name ?? "NA"}
    </div>
  );
}

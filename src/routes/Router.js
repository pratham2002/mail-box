import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Inbox from "../pages/Inbox";
import MessageDetails from "../pages/MessageDetails";
import Spam from "../pages/Spam";
import Trash from "../pages/Trash";
import Mail from "../pages/Mail";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mail" element={<Mail />}>
        <Route path="inbox">
          <Route path="" element={<Inbox />} />
          <Route path=":id" element={<MessageDetails />} />
        </Route>
        <Route path="spam" element={<Spam />} />
        <Route path="trash" element={<Trash />} />
      </Route>
    </Routes>
  );
}

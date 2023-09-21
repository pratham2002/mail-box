import React from "react";
import { Route, Routes } from "react-router-dom";
import Inbox from "../pages/Inbox";
import Mail from "../pages/Mail";
import MessageDetails from "../pages/MessageDetails";
import Spam from "../pages/Spam";
import Trash from "../pages/Trash";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Mail />}>
        <Route path="inbox">
          <Route path="" element={<Inbox />} />
          <Route path=":id" element={<MessageDetails />} />
        </Route>
        <Route path="spam">
          <Route path="" element={<Spam />} />
          <Route path=":id" element={<MessageDetails />} />
        </Route>
        <Route path="trash">
          <Route path="" element={<Trash />} />
          <Route path=":id" element={<MessageDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

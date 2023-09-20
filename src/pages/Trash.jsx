import React, { useContext } from "react";
import TrashMailCard from "../componenets/TrashMailCard";
import { MailContext } from "../context/MailContext";

export default function Trash() {
  const { state } = useContext(MailContext);
  return (
    <div className="content">
      <h2 className="heading">Trash</h2>

      {state.trash.length === 0 ? (
        <h3 style={{ textAlign: "center", paddingTop: "10px" }}>
          Trash is Empty
        </h3>
      ) : (
        <ul className="list">
          {state.trash.map((e) => {
            return <TrashMailCard mail={e} />;
          })}
        </ul>
      )}
    </div>
  );
}

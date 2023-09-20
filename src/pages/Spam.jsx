import React, { useContext } from "react";
import SpamMailCard from "../componenets/SpamMailCard";
import { MailContext } from "../context/MailContext";

export default function Spam() {
  const { state } = useContext(MailContext);
  return (
    <div className="content">
      <h2 className="heading">Spam Mails</h2>

      {state.spam.length === 0 ? (
        <h3 style={{ textAlign: "center", paddingTop: "10px" }}>
          No Spam Mails
        </h3>
      ) : (
        <ul className="list">
          {state.spam.map((mail) => {
            return <SpamMailCard mail={mail} />;
          })}
        </ul>
      )}
    </div>
  );
}

import React from "react";
import SpamMailCard from "../componenets/SpamMailCard";

export default function Spam() {
  return (
    <div className="content">
      <h2 className="heading">Spam Mails</h2>

      <ul className="list">
        {new Array(15).fill(1).map((e) => (
          <SpamMailCard />
        ))}
      </ul>
    </div>
  );
}

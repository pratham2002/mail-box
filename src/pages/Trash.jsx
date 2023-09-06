import React from "react";
import TrashMailCard from "../componenets/TrashMailCard";

export default function Trash() {
  return (
    <div className="content">
      <h2 className="heading">Trash</h2>

      <ul className="list">
        {new Array(15).fill(1).map((e) => (
          <TrashMailCard />
        ))}
      </ul>
    </div>
  );
}

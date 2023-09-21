import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../componenets/DetailCard";
import { MailContext } from "../context/MailContext";

export default function MessageDetails() {
  const { id } = useParams();

  const { state } = useContext(MailContext);

  console.log(state.mailData);
  const mailDetail = state.mailData.find(({ mId }) => mId === id);
  console.log({ mailDetail });
  return (
    <div className="content">
      <h1 className="heading">Details</h1>
      <ul className="list">
        <DetailCard mail={mailDetail} />
      </ul>
    </div>
  );
}

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MailContext } from "../context/MailContext";

export default function SpamMailCard({ mail }) {
  const { dispatch } = useContext(MailContext);
  return (
    <li
      className="list-item"
      style={{ backgroundColor: mail?.unread ? "#f2f6fc" : "" }}
    >
      <div className="list-heading">
        <p>
          <b>Subject : {mail.subject}</b>{" "}
        </p>
        <button
          className="btn star"
          onClick={() =>
            dispatch({ type: "TOGGLE_STAR_SPAM", mailId: mail.mId })
          }
        >
          {mail?.isStarred ? "Unstar" : "Star"}
        </button>
      </div>

      <p className="para">{mail.content}</p>

      <div className="footer">
        <button
          className="btn-detail"
          onClick={() =>
            dispatch({
              type: "MARK_AS_READ",
              mailId: mail.mId,
              notToggle: true,
            })
          }
        >
          <NavLink to={`${mail?.mId}`} style={{ color: "#3366CC" }}>
            View Details
          </NavLink>
        </button>
        <div className="btn-container">
          <button
            className="btn not-spam"
            onClick={() => dispatch({ type: "RESTORE_SPAM", mail: mail })}
          >
            Not Spam
          </button>
        </div>
      </div>
    </li>
  );
}

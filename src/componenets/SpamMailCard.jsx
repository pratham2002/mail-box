import { NavLink } from "react-router-dom";

export default function SpamMailCard({ mail }) {
  return (
    <li
      className="list-item"
      style={{ backgroundColor: mail?.unread ? "#f2f6fc" : "" }}
    >
      <div className="list-heading">
        <p>
          <b>Subject : Lorem ipsum dolor sit amet. </b>
        </p>
        <button className="btn star">
          Star
          {/* {mail?.isStarred ? "Unstar" : "Star"} */}
        </button>
      </div>

      <p className="para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut aliquid
        quasi repellat vel. Dignissimos beatae nemo tempore provident nostrum
        labore numquam, temporibus enim, harum tenetur odio aliquid, explicabo
        qui praesentium neque. Sit qui, animi nostrum vel velit laudantium amet?
        Provident.
      </p>

      <div className="footer">
        <button className="btn-detail">
          <NavLink to={`${mail?.mId}`} style={{ color: "#3366CC" }}>
            View Details
          </NavLink>
        </button>
        <div className="btn-container">
          <button className="btn not-spam">Not Spam</button>
        </div>
      </div>
    </li>
  );
}

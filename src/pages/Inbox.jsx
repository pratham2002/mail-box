import React, { useContext } from "react";
import MailCard from "../componenets/MailCard";
import { MailContext } from "../context/MailContext";

export default function Inbox() {
  const { state, dispatch } = useContext(MailContext);

  const unreadCount = state?.filteredMail?.filter(({ unread }) => unread)
    ?.length;

  return (
    <div className="content">
      <h2 className="heading">Inbox</h2>
      <fieldset className="bg-white">
        <legend>Filters</legend>
        <div className="bg-white">
          <div className="bg-white">
            <input
              className="bg-white"
              type="checkbox"
              id="unread-email"
              checked={state.showUnread}
              onChange={() => dispatch({ type: "TOGGLE_SHOW_UNREAD" })}
            />
            <label className="bg-white" htmlFor="unread-email">
              Show Unread Mails
            </label>
          </div>
          <div className="bg-white">
            <input
              className="bg-white"
              type="checkbox"
              id="starred-message"
              checked={state.showStarred}
              onChange={() => dispatch({ type: "TOGGLE_SHOW_STARRED" })}
            />
            <label className="bg-white" htmlFor="starred-message">
              Show Starred Mails
            </label>
          </div>
        </div>
      </fieldset>
      <h3> Unread: {unreadCount ?? 0}</h3>

      <ul className="list">
        {state?.filteredMail.map((e) => (
          <MailCard mail={e} />
        ))}
      </ul>
    </div>
  );
}

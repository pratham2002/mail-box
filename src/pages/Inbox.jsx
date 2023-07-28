import React from "react";
import MailCard from "../componenets/MailCard";

export default function Inbox() {
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
              // checked={state.showUnread}
              // onChange={() => dispatch({ type: "TOGGLE_SHOW_UNREAD" })}
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
              // checked={state.showStarred}
              // onChange={() => dispatch({ type: "TOGGLE_SHOW_STARRED" })}
            />
            <label className="bg-white" htmlFor="starred-message">
              Show Starred Mails
            </label>
          </div>
        </div>
      </fieldset>
      <h3> Unread: {0}</h3>

      <ul className="list">
        <MailCard />
        <MailCard />
        <MailCard />
        <MailCard />
        <MailCard />
        <MailCard />
        <MailCard />
        <MailCard />
      </ul>
    </div>
  );
}

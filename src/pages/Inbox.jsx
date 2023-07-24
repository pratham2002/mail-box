import React from "react";

export default function Inbox() {
  return (
    <div className="content">
      <h2 className="heading">Inbox</h2>
      <fieldset>
        <legend>Filters</legend>
        <div>
          <div>
            <input
              type="checkbox"
              id="unread-email"
              // checked={state.showUnread}
              // onChange={() => dispatch({ type: "TOGGLE_SHOW_UNREAD" })}
            />
            <label htmlFor="unread-email">Show Unread Mails</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="starred-message"
              // checked={state.showStarred}
              // onChange={() => dispatch({ type: "TOGGLE_SHOW_STARRED" })}
            />
            <label htmlFor="starred-message">Show Starred Mails</label>
          </div>
        </div>
      </fieldset>
      <h3> Unread: {0}</h3>
    </div>
  );
}

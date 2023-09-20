import { createContext, useEffect, useReducer } from "react";
import { mails } from "../db/mails";

const MailContext = createContext(null);

const MailContextProvider = ({ children }) => {
  const initialState = {
    mailData: mails,
    filteredMail: mails,
    spam: [],
    trash: [],
    showUnread: false,
    showStarred: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_MAIL_DATA": {
        return {
          ...state,
          mailData: action.mailData,
          filteredMail: action.mailData,
        };
      }
      case "SET_SPAM": {
        return {
          ...state,
          spam: [...state.spam, action.mail],
          filteredMail: state.filteredMail.filter(
            ({ mId }) => mId !== action.mail.mId
          ),
        };
      }

      case "RESTORE_SPAM": {
        return {
          ...state,
          spam: state.spam.filter(({ mId }) => mId !== action.mail.mId),
          filteredMail: [...state.filteredMail, action.mail],
        };
      }

      case "SET_TRASH": {
        return {
          ...state,
          trash: [...state.trash, action.mail],
          filteredMail: state.filteredMail.filter(
            ({ mId }) => mId !== action.mail.mId
          ),
        };
      }

      case "RESTORE_TRASH": {
        return {
          ...state,
          trash: state.trash.filter(({ mId }) => mId !== action.mail.mId),
          filteredMail: [...state.filteredMail, action.mail],
        };
      }

      case "TOGGLE_SHOW_UNREAD": {
        return { ...state, showUnread: !state.showUnread };
      }

      case "TOGGLE_SHOW_STARRED": {
        return { ...state, showStarred: !state.showStarred };
      }

      case "MARK_AS_READ": {
        return {
          ...state,
          mailData: state.mailData.map((mail) => {
            if (mail.mId === action.mailId) {
              if (action.notToggle) {
                if (mail.unread) {
                  return { ...mail, unread: !mail.unread };
                } else {
                  return mail;
                }
              } else {
                return { ...mail, unread: !mail.unread };
              }
            } else {
              return mail;
            }
          }),
        };
      }

      case "MARK_AS_STAR": {
        return {
          ...state,
          mailData: state.mailData.map((mail) => {
            if (mail.mId === action.mailId) {
              return { ...mail, isStarred: !mail.isStarred };
            } else {
              return mail;
            }
          }),
        };
      }

      case "TOGGLE_STAR_SPAM": {
        return {
          ...state,
          filteredMail: state.filteredMail.map((mail) => {
            if (mail.mId === action.mailId) {
              return { ...mail, isStarred: !mail.isStarred };
            } else {
              return mail;
            }
          }),
          spam: state.spam.map((mail) => {
            if (mail.mId === action.mailId) {
              return { ...mail, isStarred: !mail.isStarred };
            } else {
              return mail;
            }
          }),
          mailData: state.mailData.map((mail) => {
            if (mail.mId === action.mailId) {
              return { ...mail, isStarred: !mail.isStarred };
            } else {
              return mail;
            }
          }),
        };
      }

      case "TOGGLE_STAR_TRASH": {
        return {
          ...state,
          filteredMail: state.filteredMail.map((mail) => {
            if (mail.mId === action.mailId) {
              return { ...mail, isStarred: !mail.isStarred };
            } else {
              return mail;
            }
          }),
          trash: state.trash.map((mail) => {
            if (mail.mId === action.mailId) {
              return { ...mail, isStarred: !mail.isStarred };
            } else {
              return mail;
            }
          }),
          mailData: state.mailData.map((mail) => {
            if (mail.mId === action.mailId) {
              return { ...mail, isStarred: !mail.isStarred };
            } else {
              return mail;
            }
          }),
        };
      }

      case "FILTER_MAIL": {
        let newFilteredMail = state.mailData.slice();

        if (state.showUnread) {
          newFilteredMail = newFilteredMail.filter(({ unread }) => unread);
        }

        if (state.showStarred) {
          newFilteredMail = newFilteredMail.filter(
            ({ isStarred }) => isStarred
          );
        }
        return { ...state, filteredMail: newFilteredMail };
      }

      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FILTER_MAIL" });
  }, [state.showUnread, state.showStarred, state.mailData]);

  return (
    <MailContext.Provider value={{ state, dispatch }}>
      {children}
    </MailContext.Provider>
  );
};

export { MailContext, MailContextProvider };

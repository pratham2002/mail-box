import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    name: "Name",
    email: "Email",
    role: "Role",
    uid: "UID",
  });

  return (
    <UserContext.Provider
      value={{
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

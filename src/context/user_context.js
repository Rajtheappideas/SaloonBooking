import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userData, setUserdata] = useState(
    localStorage.getItem("logindata")
      ? JSON.parse(localStorage.getItem("logindata"))
      : null
  );
  const userName  = userData?.Ju?.tf;

  return (
    <UserContext.Provider value={{ userData, setUserdata,userName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

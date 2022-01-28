import { useState, createContext, useContext } from "react";

export const UserContext = createContext();

export const UseUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("agus");

  const login = (userSignIn, password) => {
    if (userSignIn === "admin" && password === 6277) {
      return setUser(userSignIn);
    }
  };

  return (
    <UserContext.Provider value={{ user, login }} displayName="User">
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

import React from "react";

// @function  UserContext
const GeneralContext = React.createContext({ token: '' });

// @function  UserProvider
// Create function to provide UserContext
export const GeneralProvider = ({ children }) => {
  const [token, setToken] = React.useState({ token: '' });

  return (
    <GeneralContext.Provider value={{ token, setToken }}>
      {children}
    </GeneralContext.Provider>
  );
};

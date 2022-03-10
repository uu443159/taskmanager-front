import React from "react";

export const GeneralContext = React.createContext({ token: '' });

export const GeneralProvider = ({ children }) => {
  const [token, setToken] = React.useState({ token: '' });

  return (
    <GeneralContext.Provider value={{ token, setToken }}>
      {children}
    </GeneralContext.Provider>
  );
};

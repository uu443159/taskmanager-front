import React, {useState} from "react";

export const GeneralContext = React.createContext({ token: '' , userName: ''});

export const GeneralProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [userName, setUserName] = useState('');

  return (
    <GeneralContext.Provider value={{ token, setToken, userName, setUserName }}>
      {children}
    </GeneralContext.Provider>
  );
};

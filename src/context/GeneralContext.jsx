import React, {useState} from "react";

export const GeneralContext = React.createContext({ token: '' , userName: ''});

export const GeneralProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [modalVisible, setModalVisible] = useState(false);

  const handleSetToken = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  }

  const handleSetUserName = (userName) => {
    setUserName(userName);
    localStorage.setItem("userName", userName)
  }

  return (
    <GeneralContext.Provider value={{ token, setToken: handleSetToken, userName, setUserName: handleSetUserName, modalVisible, setModalVisible }}>
      {children}
    </GeneralContext.Provider>
  );
};

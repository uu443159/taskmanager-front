import React, {useState} from "react";

export const GeneralContext = React.createContext({token: '', userName: '', favouritesList: [] });

export const GeneralProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userName, setUserName] = useState(localStorage.getItem("userName"));
    const [favouritesList, setFavouritesList] = useState(JSON.parse(localStorage.getItem("favouritesList") || "[]"));

    const handleSetToken = (token) => {
        setToken(token);
        localStorage.setItem("token", token);
    }

    const handleSetUserName = (userName) => {
        setUserName(userName);
        localStorage.setItem("userName", userName)
    }

    const handleSetFavouriteList = (favouritesList) => {
        setFavouritesList(favouritesList);
        localStorage.setItem("favouritesList", JSON.stringify(favouritesList));
    }

    return (
        <GeneralContext.Provider value={{
            token,
            setToken: handleSetToken,
            userName,
            setUserName: handleSetUserName,
            favouritesList,
            setFavouritesList: handleSetFavouriteList
        }}>
            {children}
        </GeneralContext.Provider>
    );
};

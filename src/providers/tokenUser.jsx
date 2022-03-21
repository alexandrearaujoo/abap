import { createContext, useState } from "react";

export const TokenUserContext = createContext([]);

export const TokenUserProvider = ({ children }) => {
    const [tokenUser, setTokenUser] = useState(localStorage.getItem("@abap.tokenUser") || "");
    const changeTokenUser = (item) => {
        localStorage.setItem("@abap.tokenUser",item); 
        setTokenUser(item);
    };
    return (
        <TokenUserContext.Provider value={{ tokenUser, changeTokenUser }}>
            {children}
        </TokenUserContext.Provider>
    );
};

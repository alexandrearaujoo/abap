import { createContext, useState } from "react";

export const TokenAssociadoContext = createContext([]);

export const TokenAssociadoProvider = ({ children }) => {
const [tokenAssociado, setTokenAssociado] = useState(localStorage.getItem("ARAP_App.tokenAssociado"));
  const changeTokenAssociado = (item) => {
    localStorage.setItem("ARAP_App.tokenAssociado",item);
    setTokenAssociado( item);
  };
  return (
    <TokenAssociadoContext.Provider value={{ tokenAssociado, changeTokenAssociado }}>
      {children}
    </TokenAssociadoContext.Provider>
  );
};

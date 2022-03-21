import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

const MedidoresContext = createContext([]);

export const MedidoresPrivider = ({ children }) => {
  const [medidores, setMedidores] = useState([]);

  useEffect(() => {
    const loadMedidores = () => {
      api.get("/medidores").then((res) => setMedidores(res.data));
    };
    loadMedidores();
  }, [medidores]);

  const addMedidores = (data) => {
    api.post("/medidores", data).then((res) => setMedidores(res.data));
  };
  
  return (
    <MedidoresContext.Provider value={{ medidores, addMedidores }}>
      {children}
    </MedidoresContext.Provider>
  );
};

export const useMedidores = () => useContext(MedidoresContext);

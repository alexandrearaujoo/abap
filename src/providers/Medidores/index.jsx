import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-hot-toast";

const MedidoresContext = createContext([]);

export const MedidoresPrivider = ({ children }) => {
  const [medidores, setMedidores] = useState([]);
  const [infoMedidor, setInfoMedidor] = useState([]);

  const loadMedidores = () => {
    api
      .get("/medidores")
      .then((res) => setMedidores(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadMedidores();
  }, []);

  const addMedidores = (data) => {
    api
      .post("/medidores", data)
      .then((res) => {
        toast.success("Medidor cadastrado");
        setMedidores([...medidores, res.data]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Algo deu errado");
      });
  };

  const infosMedidor = (id) => {
    api
      .get(`/medidores/${id}`)
      .then((res) => setInfoMedidor(res.data))
      .catch((err) => console.log(err));
  };

  const updateMedidor = (data, id) => {
    api
      .patch(`/medidores/${id}`, data)
      .then((res) => loadMedidores())
      .catch((err) => console.log(err));
  };

  return (
    <MedidoresContext.Provider
      value={{
        medidores,
        addMedidores,
        infoMedidor,
        infosMedidor,
        updateMedidor
      }}
    >
      {children}
    </MedidoresContext.Provider>
  );
};

export const useMedidores = () => useContext(MedidoresContext);

import { createContext, useEffect, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

const PagamentosContext = createContext([]);

export const PagamentosProvider = ({ children }) => {
  const [pagamentos, setPagamentos] = useState([]);
  const [historicoUser, setHistoricoUser] = useState([]);
  const [infoPagamento, setInfoPagamento] = useState([]);
  const [qrCode, setqrCode] = useState("");

  const loadPagamentos = () => {
    api.get("/pagamentos").then((res) => setPagamentos(res.data));
  };

  useEffect(() => {
    loadPagamentos();
  }, []);

  const getHistoricoAssociado = (id) => {
    api
      .get(`/users/${id}`)
      .then((res) => setHistoricoUser(res.data.historico_pagamentos))
      .catch((err) => console.log(err));
  };

  const getPagamento = (id) => {
    api
      .get(`/pagamentos/${id}`)
      .then((res) => setInfoPagamento(res.data))
      .catch((err) => console.log(err));
  };

  const gerarQRcode = (data, id) => {
    api
      .post(`/pagamentos/${id}`, data)
      .then((res) => setqrCode(res.data.qrCode));
  };

  const updatePagamento = (data, id) => {
    api
      .patch(`pagamentos/${id}`, data)
      .then((_) => {
        toast.success("Dados atualizados");
      })
      .catch((err) => console.log(err));
  };

  return (
    <PagamentosContext.Provider
      value={{
        pagamentos,
        historicoUser,
        infoPagamento,
        getHistoricoAssociado,
        getPagamento,
        gerarQRcode,
        qrCode,
        updatePagamento,
      }}
    >
      {children}
    </PagamentosContext.Provider>
  );
};

export const usePagamentos = () => useContext(PagamentosContext);

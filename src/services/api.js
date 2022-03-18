import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001", // LEMBRAR DE ALTERAR PARA O ENDERECO DE PRODUCAO
});

export default api;

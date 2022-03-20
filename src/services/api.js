import axios from "axios";

const api = axios.create({
  baseURL: "https://arap-api.herokuapp.com/"
});

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://movieexplorerbackend-7tr8.onrender.com/",
});

export default api;
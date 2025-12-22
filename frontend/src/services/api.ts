import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.QUOTES_API_BASE_URL || "http://localhost:3000/api/quotes",
  headers: {"content-type": "application/json"},
});

export default api;

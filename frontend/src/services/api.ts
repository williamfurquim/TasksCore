import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

const token = localStorage.getItem("token");

if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
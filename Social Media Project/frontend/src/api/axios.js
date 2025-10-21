import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-three-phi-30.vercel.app/", 
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

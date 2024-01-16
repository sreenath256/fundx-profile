import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosClient = axios.create({
  baseURL: baseURL,
});

export default axiosClient;

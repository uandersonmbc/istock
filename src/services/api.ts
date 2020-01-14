import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    baseURL: "http://192.168.100.91:3333",
    timeout: 2000
});

api.interceptors.request.use(async config => {
    const token = await getToken();
    console.log(token)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;

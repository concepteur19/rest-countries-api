import axios from 'axios';

const axiosAuth = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

axiosAuth.interceptors.request.use((config) => {
    return config;
});

export default axiosAuth;

import axios from "axios";

const axiosBase = axios.create({
    baseURL:"https://backend.saturncryptovc.com/api",
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosBase;
import axios from "axios";

const api = axios.create({
    baseURL:  "hhttps://api.themoviedb.org/3/",
    params: {
        api_key: "7a02ffa526936d1b51a2007b8454a366",
        language: "en-US"
    }
});

export default api;
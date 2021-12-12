import axios from "axios";

const api = axios.create({
 baseURL:"http://152.67.108.132:4000",
});

export default api;
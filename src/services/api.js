import axios from 'axios';

const END_POINT = "http://localhost:3000/";

//endpoints
export const eps = {
    login: "/api/common/login",
    register: "/api/common/register"
}

const api = axios.create({
    baseURL: END_POINT
});


export default api;
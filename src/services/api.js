import axios from 'axios';

const END_POINT = "https://api-pc-app.herokuapp.com";

//endpoints
export const eps = {
    login: `${END_POINT}/api/common/login`,
    register: `${END_POINT}/api/common/register`
}

const api = axios.create({
    baseURL: END_POINT
});


export default api;
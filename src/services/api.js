import axios from 'axios';

const END_POINT = "https://api-pc-app.herokuapp.com";

//endpoints
export const eps = {
    login: `${END_POINT}/api/v1/usuario/login/`,
    register: `${END_POINT}/api/v1/usuario/create/`,

    usuarioUpdate: `${END_POINT}/api/v1/usuario/update/`
}

const api = axios.create({
    baseURL: END_POINT
});


export default api;
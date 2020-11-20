import axios from 'axios';
import { getToken } from './authJwt';

const END_POINT = "http://127.0.0.1:8000/";

//endpoints
export const eps = {
    userGetAll: 'api/v1/usuario/get_all/',
    userGetById: 'api/v1/usuario/get_by_id/',
    userCreate: 'api/v1/usuario/create/',
    userUpdate: 'api/v1/usuario/update/',
    userDelete: 'api/v1/usuario/delete/',

    produtoGetAll: 'api/v1/produto/get_all/',
    produtoGetById: 'api/v1/produto/get_by_id/',
    produtoCreate: 'api/v1/produto/create/',
    produtoUpdate: 'api/v1/produto/update/',
    produtoDelete: 'api/v1/produto/delete/',

    pedidoGetAll: 'api/v1/pedido/get_all/',
    pedidoGetById: 'api/v1/pedido/get_by_id/',
    pedidoCreate: 'api/v1/pedido/create/',
    pedidoUpdate: 'api/v1/pedido/update/',
    pedidoDelete: 'api/v1/pedido/delete/',

    itemGetAll: 'api/v1/item/get_all/',
    itemGetById: 'api/v1/item/get_by_id/',
    itemCreate: 'api/v1/item/create/',
    itemUpdate: 'api/v1/item/update/',
    itemDelete: 'api/v1/item/delete/',
}

const api = axios.create({
    baseURL: END_POINT
});

api.interceptors.request.use(
    async config => {
        const token = getToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => Promise.reject(error)
);

export default api;
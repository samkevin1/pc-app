import api, { eps } from '../../../services/api';

export const SET_VALUE = "[PRODUCT] SET_VALUE";
export const CLEAR_VALUES = "[PRODUCT] CLEAR_VALUES";

export const GET_ALL_PRODUCTS = "[PRODUCT] GET_ALL_PRODUCTS";
export const GET_ALL_PRODUCTS_SUCCESS = "[PRODUCT] GET_ALL_PRODUCTS_SUCCESS";
export const GET_ALL_PRODUCTS_FAILED = "[PRODUCT] GET_ALL_PRODUCTS_FAILED";

export function getAllProducts(callback){
  return async (dispatch, getState) => {
    dispatch({
      type: GET_ALL_PRODUCTS
    });

    try {
      const response = await api.get(eps.produtoGetAll);

      if(response.data.success) {
        dispatch({
          type: GET_ALL_PRODUCTS_SUCCESS,
          payload: response.data.data
        });
        callback && callback(false, responde.data.data);
      } else {
        dispatch({
          type: GET_ALL_PRODUCTS_FAILED,
          payload: response.data.message
        });
        callback && callback(response.data.message);
      }
    } catch(error) {
      dispatch({
        type: GET_ALL_PRODUCTS_FAILED,
        payload: String(error)
      });
      callback && callback(String(error));
    } 
  }
}

export function setValue(payload) {
  return { type: SET_VALUE, payload };
}

export function clearValues() {
  return { type: CLEAR_VALUES };
}
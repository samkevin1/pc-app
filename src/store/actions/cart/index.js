import api, { eps } from '../../../services/api';

export const SET_VALUE = "[CART] SET_VALUE";
export const CLEAR_VALUES = "[CART] CLEAR_VALUES";

export const ADD_PRODUCT_TO_CART = "[CART] ADD_PRODUCT_TO_CART";
export const ADD_PRODUCT_TO_CART_SUCCESS = "[CART] ADD_PRODUCT_TO_CART_SUCCESS";
export const ADD_PRODUCT_TO_CART_FAILED = "[CART] ADD_PRODUCT_TO_CART_FAILED";

export const REMOVE_PRODUCT = "[CART] REMOVE_PRODUCT";

export function removeProduct(productId) {
  return async (dispatch, getState) => {
    const { cartProduct } = getState().cart;

    dispatch({
      type: REMOVE_PRODUCT,
      payload: cartProduct.filter(p => p.id !== productId)
    });
  }
} 

export function addToCart(product){
  return async (dispatch, getState) => {
    if(!product) {
      dispatch({
        type: ADD_PRODUCT_TO_CART_FAILED,
        payload: "Erro ao adicionar produto ao carrinho."
      });
    } else {
      const { cartProducts } = getState().cart;
      
      console.log('cart', cartProducts)

      let products = cartProducts

      products.push(product);

      dispatch({
        type: ADD_PRODUCT_TO_CART_SUCCESS,
        payload: products
      });
    }
  }
}

export function setValue(payload) {
  return { type: SET_VALUE, payload };
}

export function clearValues() {
  return { type: CLEAR_VALUES };
}
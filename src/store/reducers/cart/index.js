import * as actions from '../../actions/cart/index';

let initialState = {
  loading: false,
  errors: {},
  cartProducts: []
}

export const reducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case actions.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        errors: initialState.errors,
        loading: true
      };
    case actions.REMOVE_PRODUCT:
      return {
        ...state,
        cartProducts: payload
      }
    case actions.ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        cartProducts: payload,
        loading: false
      };
    case actions.ADD_PRODUCT_TO_CART_FAILED: {
      return {
        ...state,
        loading: false,
        errors: payload
      }
    }
    case actions.SET_VALUE:
      if (payload.loading) {
        payload.loading = { ...state.loading, ...payload.loading };
      }
      return {
        ...state,
        ...payload,
      };
    case actions.CLEAR_VALUES:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;

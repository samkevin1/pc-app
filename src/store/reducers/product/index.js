import * as actions from '../../actions/product/index';

let initialState = {
  loading: false,
  errors: {},
  products: []
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_ALL_PRODUCTS:
      return {
        ...state,
        errors: initialState.errors,
        loading: true
      };
    case actions.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false
      };
    case actions.GET_ALL_PRODUCTS_FAILED: {
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

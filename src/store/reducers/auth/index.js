import * as actions from '../../actions/auth/index';

let initialState = {
  loading: false,
  errors: {},
  user: null,
  email: "",
  senha: "",
  token: null
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.LOGOUT:
      return {
        ...initialState,
      };
    case actions.LOGIN:
      return {
        ...state,
        errors: initialState.errors,
        loading: { ...state.loading, login: true },
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        loading: { ...state.loading, login: false },
      };
    case actions.REGISTER_USER: {
      return {
        ...state,
        loading: { ...state.loading, register: true }
      }
    }
    case actions.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        loading: { ...state.loading, register: false }
      }
    }
    case actions.REGISTER_USER_FAILED: {
      return {
        ...state,
        loading: { ...state.loading, register: false },
        errors: payload
      }
    }
    case actions.LOGIN_FAILED:
      return {
        ...state,
        loading: { ...state.loading, login: false },
        errors: payload,
      };
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

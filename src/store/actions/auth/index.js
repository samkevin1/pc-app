import api, { eps } from '../../../services/api';

export const SET_VALUE = "[AUTH] SET_VALUE";
export const CLEAR_VALUES = "[AUTH] CLEAR_VALUES";

export const LOGOUT = "[AUTH] LOGOUT";

export const LOGIN = "[AUTH] LOGIN";
export const LOGIN_SUCCESS = "[AUTH] LOGIN_SUCCESS";
export const LOGIN_FAILED = "[AUTH] LOGIN_FAILED";

export const REGISTER_USER = "[AUTH] REGISTER_USER";
export const REGISTER_USER_SUCCESS = "[AUTH] REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILED = "[AUTH] REGISTER_USER_FAILED";

export function registerUser(user, callback) {
  return async (dispatch, getState) => {
    dispatch({
      type: REGISTER_USER
    });

    try {
      const response = await api.post(eps.login, user);
      console.log('res', response)

      if(response.data.success) {
        dispatch({
          type: REGISTER_USER_SUCCESS
        });
        callback && callback(false, response.data);
      } else {
        dispatch({
          type: REGISTER_USER_FAILED,
          payload: "Ocorreu um erro ao tentar cadastrar o usuario. Tente novamente mais tarde."
        });
        callback && callback("Ocorreu um erro ao tentar cadastrar o usuario. Tente novamente mais tarde.", false);
      }
 
    } catch(error) {
      dispatch({
        type: REGISTER_USER_FAILED,
        payload: String(error)
      });
      callback && callback(true, String(error));
    }

  }
}

export function submitLogin(values, callback) {
  
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN
    });
    

    try {
      console.log('action', eps.login)
      const response = await api.post(eps.login, values);

      console.log('response', response)

      if(response.data.success) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { token: response.data.token, user: response.data.user }
        });
        callback && callback(false, response.data.user);
      } else {
        dispatch({
          type: LOGIN_FAILED,
          payload: "Ocorreu um erro ao tentar se cadastrar"
        });
        callback && callback("Ocorreu um erro ao tentar se cadastrar", false);
      }

    } catch(error) {
      dispatch({
        type: LOGIN_FAILED,
        payload: String(error)
      });
    }

  }
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function setValue(payload) {
  return { type: SET_VALUE, payload };
}

export function clearValues() {
  return { type: CLEAR_VALUES };
}

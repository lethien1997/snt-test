import actionTypes from '../../contants/actionTypes';

export const loginError = (message) => {
  return {
    type: actionTypes.LOGIN_ERROR,
    payload: { message },
  };
};

export const loginRequest = (formData) => {
  return {
    type: actionTypes.LOGIN_REQUEST,
    payload: { formData },
  };
};

export const loginSuccess = (accessToken) => {
  console.log('accessToken', accessToken)
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: { accessToken },
  };
};

export const loginFail = (error) => {
  return {
    type: actionTypes.LOGIN_FAIL,
    payload: { error },
  };
};

// export const logoutRequest = () => {
//   return {
//     type: actionTypes.LOG_OUT_REQUEST,
//     payload: {},
//   };
// };

// export const logoutSuccess = () => {
//   return {
//     type: actionTypes.LOG_OUT_SUCCESS,
//     payload: {},
//   };
// };

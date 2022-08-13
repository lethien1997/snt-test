import actionTypes from '../../contants/actionTypes';
import { removeAccessToken } from '../../util/localStorage';

export const logoutRequest = () => {
  const rs = removeAccessToken();
  return {
    type: actionTypes.LOGIN_REQUEST,
    payload: {},
  };
};

export const loginSuccess = (accessToken) => {
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

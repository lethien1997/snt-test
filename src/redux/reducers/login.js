import { getAccessToken } from '../../util/localStorage';
import actionTypes from '../../contants/actionTypes';

const initialState = {
  accessToken: getAccessToken(),
  errMessage: null,
  isSubmitting: null,
  isLogOut: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isSubmitting: true,
        isLogOut: null,

      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        errMessage: null,
        isSubmitting: false,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        errMessage: action.payload.message,
        isSubmitting: false,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        errMessage: action.payload.error,
        isSubmitting: false,
      };
    case actionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLogOut: true,
      };
    default:
      return state;
  }
};

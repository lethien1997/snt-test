import { getAccessToken } from '../../util/localStorage';
import actionTypes from '../../contants/actionTypes';

const initialState = {
  accessToken: null,
  errMessage: null,
  isSubmitting: null,
  isLogOut: null,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isSubmitting: true,
        isLogOut: null,
        errMessage: null,

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
        errMessage: true,
        isSubmitting: null,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        errMessage: true,
        isSubmitting: false,
      };
    case actionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLogOut: true,
        isSubmitting: null,
        errMessage: null,
        accessToken: null
      };
    default:
      return state;
  }
};

export default loginReducer;

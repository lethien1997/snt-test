import { getAccessToken } from '../../util/localStorage';
import actionTypes from '../../contants/actionTypes';

const initialState = {
  errMessage: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ANIMALS_REQUEST:
      return {
        ...state,
      };
    case actionTypes.GET_ANIMALS_SUCCESS:
      return {
        ...state,
        errMessage: null,
      };
    case actionTypes.GET_ANIMALS_FAIL:
      return {
        ...state,
        errMessage: action.payload.error,
      };
    default:
      return state;
  }
};

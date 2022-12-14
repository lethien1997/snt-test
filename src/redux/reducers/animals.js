import actionTypes from '../../contants/actionTypes';

const initialState = {
  errMessage: null,
  animals: [],
  isLoadingAnimals : null, 
  isLoadSucces: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ANIMALS_REQUEST:
      return {
        ...state,
        isLoadingAnimals: true
      };
    case actionTypes.GET_ANIMALS_SUCCESS:
      return {
        ...state,
        errMessage: null,
        animals: action.payload.animals,
        pagination: action.payload.pagination,
        isLoadingAnimals: false,
        isLoadSucces: true

      };
    case actionTypes.GET_ANIMALS_FAIL:
      return {
        ...state,
        errMessage: action.payload.error,
        isLoadSucces: false
      };
    default:
      return state;
  }
};

export default reducer

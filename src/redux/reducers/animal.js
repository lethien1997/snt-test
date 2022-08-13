import actionTypes from '../../contants/actionTypes';

const initialState = {
  errMessage: null,
  animal: {},
  isLoadingAnimalItem : null, 
  isLoadSucces: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ANIMAL_ITEM_REQUEST:
      return {
        ...state,
        isLoadingAnimalItem: true
      };
    case actionTypes.GET_ANIMAL_ITEM_SUCCESS:
      return {
        ...state,
        errMessage: null,
        animal: action.payload.animal,
        isLoadingAnimalItem: false,
        isLoadSucces: true

      };
    case actionTypes.GET_ANIMAL_ITEM_FAIL:
      return {
        ...state,
        errMessage: action.payload.error,
        isLoadSucces: false,
        isLoadingAnimalItem: null,

      };
    default:
      return state;
  }
};

export default reducer



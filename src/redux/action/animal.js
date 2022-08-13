import actionTypes from '../../contants/actionTypes';


export const getAnimalsItemRequest = (id) => {
  return {
    type: actionTypes.GET_ANIMAL_ITEM_REQUEST,
    payload: { id },
  };
};

export const getAnimalsItemSuccess = (animal) => {
  return {
    type: actionTypes.GET_ANIMAL_ITEM_SUCCESS,
    payload: {animal},
  };
};

export const getAnimalsItemFail = (error) => {
  return {
    type: actionTypes.GET_ANIMAL_ITEM_FAIL,
    payload: { error },
  };
};



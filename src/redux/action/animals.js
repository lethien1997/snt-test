import actionTypes from '../../contants/actionTypes';


export const getAnimalsRequest = () => {
  return {
    type: actionTypes.GET_ANIMALS_REQUEST,
    payload: {  },
  };
};

export const getAnimalsSuccess = (animals) => {
  return {
    type: actionTypes.GET_ANIMALS_SUCCESS,
    payload: animals,
  };
};

export const getAnimalsFail = (error) => {
  return {
    type: actionTypes.GET_ANIMALS_FAIL,
    payload: { error },
  };
};



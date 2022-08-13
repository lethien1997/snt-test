import { baseUrl } from '../contants/config';
import axios from 'axios';
import request from './request';

const getAnimalItemApi = async (animalId) => {
  try {
    const res = await axios.get(`${baseUrl}/animals/${animalId}`, {
      headers: request(),
    });

    return res.data;
  } catch (error) {
    throw new Error('Has error when fetch data here');
  }
};
export default { getAnimalItemApi };
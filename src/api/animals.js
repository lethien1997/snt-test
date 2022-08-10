import { baseUrl } from '../contants/config';
import axios from 'axios';
import request from './request';

const getAnimalsApi = async () => {
  try {
    const res = await axios.get(`${baseUrl}/animals`, {
      headers: request()
    });
    return res.data;
  } catch (error) {
    throw new Error('Has error when fetch data here');
  }
};
export default { getAnimalsApi };

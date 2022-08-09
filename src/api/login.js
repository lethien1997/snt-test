import { baseUrl } from '../contants/config';
import axios from 'axios';

const loginApi = async (formData) => {
  try {
    const res = await axios.post(`${baseUrl}/oauth2/token`, formData);
    return res.data;
  } catch (error) {
    throw new Error('Has error when fetch data here');
  }
};
export default { loginApi };

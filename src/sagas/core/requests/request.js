import { call, put, select, take } from 'redux-saga/effects';


// export default function* request(method, ...args) {
//   try {
//     const accessToken = 'eyJhbGciOiJIUzI1NiJ9.NzI0NDEyNjUzNDk3MjIyMTQ1.hYs4mMv3dYcTffzJciEuh_w5l0qhBUgLmZ9d31I2WLk'

//     return yield call(method, ...args, {
//       Authorization: `Bearer ${accessToken}`,
//     });
//   } catch (error) {
//     console.log(error)

//     throw error;
//   }
// }

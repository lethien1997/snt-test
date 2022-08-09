const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.NzI0NDEyNjUzNDk3MjIyMTQ1.hYs4mMv3dYcTffzJciEuh_w5l0qhBUgLmZ9d31I2WLk';
export default function request() {
  return {
    Authorization: `Bearer ${accessToken}`,
  };
}

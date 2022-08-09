export const getAccessToken = () => {
  return JSON.parse(localStorage.getItem('access_token'));
};
export const setAccessToken = (accessToken) =>
  localStorage.setItem('access_token', JSON.stringify(accessToken));
export const removeAccessToken = () => localStorage.removeItem('access_token');

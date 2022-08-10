import { getAccessToken } from '../util/localStorage';

export default function request() {
  const accessToken = getAccessToken();
  return {
    Authorization: `Bearer ${accessToken}`,
  };
}

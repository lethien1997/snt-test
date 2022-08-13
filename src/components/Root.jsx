import React, { useEffect, useState } from 'react';
import { getAnimalsRequest } from '../redux/action';
import { getAccessToken } from '../util/localStorage';
import Animals from './Animals';
import Login from './Login';
import { useDispatch } from 'react-redux';

const Root = ({ store, history }) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState();
  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      dispatch(getAnimalsRequest());
    }
    setToken(accessToken);
  }, [token]);
  return <>{token ? <Animals /> : <Login />}</>;
};

export default Root;

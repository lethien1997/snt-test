import React, { useEffect } from 'react';
import { useState } from 'react';
// import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';

import Paths from '../contants/Paths';
import { getAccessToken } from '../util/localStorage';
import Animals from './Animals';

import Login from './Login';

const Root = ({ store, history }) => {
  const [token, setToken] = useState()
  useEffect(()=> {
    const accessToken = getAccessToken();
    setToken(accessToken)
  }, [token])
  return <>{token ? <Animals /> : <Login />}</>;
};

export default Root;

import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/logo.png';
import avt from '../../assets/avt2.jfif';
import { useNavigate } from 'react-router-dom';

import { getAccessToken, removeAccessToken } from '../../util/localStorage';
import { useDispatch } from 'react-redux';
import { logoutRequest } from '../../redux/action/logout';

const Header = () => {
  // let navigate = useNavigate();

  const dispatch = useDispatch();
  const [token, setToken] = useState(getAccessToken());
  // const accessToken = getAccessToken();
  const handleLogout = () => {
    dispatch(logoutRequest());
    setToken(null);
    // removeAccessToken()
  };
  const accessToken = getAccessToken();
  useEffect(() => {
    if(!accessToken) {
      // navigate('/')
      // setToken(accessToken);
    }
  }, [token]);
  return (
    <div className={styles.header}>
      <Container className={styles.container}>
        <span className={styles.logo}>
          <img className={styles.logoImg} src={logo} />
        </span>
        <span className={styles.btns}>
          {token ? (
            <span className={styles.avt}>
              <img src={avt} />
            </span>
          ) : (
            <span className={styles.btn}>
              <h3 className={styles.title}>Login</h3>
            </span>
          )}
          <span className={styles.btn} onClick={handleLogout}>
            <h3 className={styles.title}>Logout</h3>
          </span>
        </span>
      </Container>
    </div>
  );
};

export default Header;

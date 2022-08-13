import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/logo.png';
import avt from '../../assets/avt2.jfif';

import { getAccessToken, removeAccessToken } from '../../util/localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../../redux/action/logout';
import clsx from 'clsx';

const Header = () => {
  const dispatch = useDispatch();
  const { isSubmitting, isLogOut } = useSelector((state) => state.login);

  const [token, setToken] = useState(localStorage.getItem('access_token'));
  const handleLogout = () => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      dispatch(logoutRequest());
      setToken(null);
    }
  };
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setToken(accessToken);
    }
  }, [isSubmitting]);

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
            <span className={clsx(styles.btn, styles.btnLogin)}>
              <h3 className={styles.title}>SIGN IN</h3>
            </span>
          )}
          <span
            className={clsx(styles.btn, styles.btnLogout)}
            onClick={handleLogout}
          >
            <h3 className={styles.title}>SIGN UP</h3>
          </span>
        </span>
      </Container>
    </div>
  );
};

export default Header;

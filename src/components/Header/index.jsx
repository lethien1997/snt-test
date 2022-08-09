import { Container } from '@mui/system';
import React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <Container className={styles.container}>
        <span className={styles.logo}>
          <img className={styles.logoImg} src={logo} />
        </span>
        <span className={styles.btns}>
          <span>
            <h3 className={styles.title}>Login</h3>
          </span>
          <span>
            <h3 className={styles.title}>Logout</h3>
          </span>
        </span>
      </Container>
    </div>
  );
};

export default Header;

import React  from 'react';
import styles from './styles.module.scss';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <CircularProgress />
      </div>
    </div>
  );
};

export default Loading;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';


const NotFound = () => {
 
  
  return (
    <div className={styles.container}>
        <h3 className={styles.desc}>404 | Không tìm thấy trang này.</h3>
        {/* <Link href="/"> */}
          {/* <Typography style={styles.link}>
            <BsFillArrowLeftCircleFill style={styles.icon} />
            Trang chủ
          </Typography> */}
        {/* </Link> */}
      </div>
  );
};

export default NotFound;

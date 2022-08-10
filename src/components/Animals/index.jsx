import { Container, Grid } from '@mui/material';
import clsx from 'clsx';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import request from '../../api/request';
import { getAnimalsRequest, loginRequest } from '../../redux/action';
import SelectSizeImg from '../../util/SelectSizeImg';
import AnimalItem from './AnimalItem';
import { Pagination } from '@mui/material';
import styles from './styles.module.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { getAccessToken } from '../../util/localStorage';
import { useNavigate } from 'react-router-dom';

const firstIndex = 0;

function Animals() {
  let navigate = useNavigate();

  const { accessToken, isSubmitting, isLogOut } = useSelector((state) => state.login);
  const { animals } = useSelector((state) => state.animals);
  const [token, setToken] = useState(getAccessToken());
  const [data, setData] = useState();
  const [pageSize, setPageSize] = useState(6);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnimalsRequest());
  }, []);
  console.log(animals);

   useEffect(() => {
    setData(animals.slice(firstIndex, pageSize));

    // if (type !== null)
    //   setData(res.filter((project) => project.attributes.type === type));
  }, [animals]);

  useEffect(() => {
    Aos.init({ duration: 1500 });

    // const accessToken = getAccessToken();

    if (isLogOut) {
      navigate('/');
      // setToken(accessToken);
    } else {
      // dispatch(getAnimalsRequest());
    }
  }, [isLogOut]);

  const handleChange = (event, value) => {
    setPage(value);
    setData(
      animals.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    );
  };
  return (
    <>
      <Container>
        <h2>All Animal</h2>
      </Container>
      <div className={styles.all}>
        <Container>
          <Grid container spacing={1} className={styles.wrapper}>
            {data &&
              data.map((item, index) => (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  className={styles.item}
                >
                  <AnimalItem item={item} styles={styles} />
                </Grid>
              ))}
          </Grid>
          <div className={styles.pagination}>
            <Pagination
              color='primary'
              count={animals && Math.ceil(animals.length / pageSize)}
              page={page}
              variant='outlined'
              shape='rounded'
              onChange={handleChange}
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Animals;

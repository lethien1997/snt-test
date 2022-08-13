import { Container, Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnimalItem from './AnimalItem';
import { Pagination } from '@mui/material';
import styles from './styles.module.scss';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import { getAnimalsRequest } from '../../redux/action';

const firstIndex = 0;

function Animals() {
  let navigate = useNavigate();

  const { isSubmitting, isLogOut } = useSelector((state) => state.login);
  const { animals, isLoadSucces } = useSelector((state) => state.animals);
  const [data, setData] = useState();
  const [pageSize, setPageSize] = useState(6);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      navigate('/login');
    } else {
      dispatch(getAnimalsRequest());
    }

    if (animals) {
      setData(animals.slice(firstIndex, pageSize));
    }
  }, [animals, isSubmitting]);

  const handleChange = (event, value) => {
    setPage(value);
    setData(
      animals &&
        animals.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    );
  };
  return (
    <>
      {!isLoadSucces ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}

export default Animals;

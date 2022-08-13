import { Container, Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import 'aos/dist/aos.css';
import { useNavigate, useParams, useFakeFetch } from 'react-router-dom';
import Loading from '../Loading';
import { getAnimalsItemRequest } from '../../redux/action';
import { getAccessToken } from '../../util/localStorage';
import SelectSizeImg from '../../util/SelectSizeImg';
import { useWindowSize } from 'react-use';

function AnimalDatail() {
  let navigate = useNavigate();
  let params = useParams();
  const { isSubmitting, isLogOut, accessToken } = useSelector((state) => state.login);
  // const { animals, isLoadSucces } = useSelector((state) => state.animals);
  const { animal, isLoadingAnimalItem } = useSelector((state) => state.animal);
  const { width } = useWindowSize();
  const imgRef = useRef();
  const [sizeImg, setSizeImg] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    // const accessToken = getAccessToken();
    if (!accessToken) {
      navigate('/login');
    }
    if (isLoadingAnimalItem === false) {
    }
    if (isLoadingAnimalItem === null) {
      dispatch(getAnimalsItemRequest(params.id));
    }
  }, [isLoadingAnimalItem, accessToken]);
  useEffect(() => {
    setSizeImg(imgRef.current.clientWidth / 2);
  }, [width]);
  return (
    <>
      {isLoadingAnimalItem === false ? (
        <>
          <div className={styles.all}>
            <Container>
              <Grid container spacing={1} className={styles.wrapper}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={8}
                  className={styles.content}
                  ref={imgRef}
                >
                  <div className={styles.contentWp}>
                    <span className={styles.image}>
                      <SelectSizeImg
                        data={animal.primary_photo_cropped}
                        widthImg={sizeImg *2}
                        sizeImg={sizeImg}
                      />
                    </span>
                    <h2>{animal && animal.name}</h2>
                    <h4>
                      {animal &&
                        `Address: ${animal.contact.address.city} - ${animal.contact.address.state}`}
                    </h4>
                    <ul>
                      <li>{animal && animal.gender}</li>
                      <li>{animal && animal.size}</li>
                      <li>{animal && animal.colors.primary}</li>
                    </ul>
                    <p>{animal.description}</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} className={styles.content}>
                  <div className={styles.contentWp}>
                    <h2>Contact</h2>
                    <h4>
                      {animal &&
                        `Address: ${animal.contact.address.city} - ${animal.contact.address.state}`}
                    </h4>
                    <h4> {`Email: ${animal.contact.email} `}</h4>
                    <h4> {`Phone: ${animal.contact.phone} `}</h4>
                  </div>
                </Grid>
                <Grid item className={styles.item}></Grid>
              </Grid>
            </Container>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default AnimalDatail;

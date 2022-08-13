import { Grid } from '@mui/material';
import clsx from 'clsx';
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectSizeImg from '../../util/SelectSizeImg';
import { useWindowSize } from 'react-use';
import { useNavigate } from 'react-router-dom';
import { getAnimalsItemRequest } from '../../redux/action';
// import {GoPrimitiveDot} from 'react-icons/go'
function AnimalItem({ item, styles }) {
  const { width } = useWindowSize();
  let navigate = useNavigate();
  // const { animals } = useSelector((state) => state.animals);
  const { animal, isLoadingAnimalItem } = useSelector((state) => state.animal);

  const [sizeImg, setSizeImg] = useState(0);
  const dispatch = useDispatch();
  const imgRef = useRef();

  useEffect(() => {
    setSizeImg(imgRef.current.clientWidth);
  }, [width]);
  const handleClick = () => {
    navigate(`/animals/${item.id}`);
  };
  // useEffect(() => {
  //   if (isLoadingAnimalItem === false) {
  //   }
  // }, [isLoadingAnimalItem]);
  return (
    <div className={styles.itemBg} ref={imgRef} onClick={handleClick}>
      <span className={styles.image}>
        <SelectSizeImg
          data={item.primary_photo_cropped}
          widthImg={sizeImg * 2}
          sizeImg={sizeImg}
        />
      </span>
      <div className={styles.infor}>
        <h3>
          {item.name}: {item.gender}
        </h3>
        <h4>Age: {item.age}</h4>
        <h4>Size: {item.size}</h4>
      </div>
    </div>
  );
}

export default AnimalItem;

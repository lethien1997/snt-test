import { Grid } from '@mui/material';
import clsx from 'clsx';
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectSizeImg from '../../util/SelectSizeImg';
import { useWindowSize } from 'react-use';
// import {GoPrimitiveDot} from 'react-icons/go'
function AnimalItem({ item, styles }) {
  const { width } = useWindowSize();

  const { animals } = useSelector((state) => state.animals);
  const [sizeImg, setSizeImg] = useState(0);

  const imgRef = useRef();

  useEffect(() => {
    setSizeImg(imgRef.current.clientWidth);
  }, [width]);

  return (
    <div className={styles.itemBg} ref={imgRef}>
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

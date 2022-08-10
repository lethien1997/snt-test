import React, { useEffect, useMemo, useState } from 'react';
import errorImage from '../assets/error.jpg';

const SelectSizeImg = ({
  sizeImg,
  heightImg,
  data,
  widthImg,
  bgSize,
  layout,
}) => {
  // const [img, setImg] = useState();
  const [img, setImg] = useState(null);
  useEffect(() => {
    if (data) {
      if (widthImg <= 600) {
        if (data.small) {
          setImg(data.small);
        } else if (data.medium) {
          setImg(data.medium);
        } else if (data.large) {
          setImg(data.large);
        } else if (data.full) {
          setImg(data.full);
        }
      } else if (widthImg <= 960) {
        if (data.medium) {
          setImg(data.medium);
        } else if (data.large) {
          setImg(data.large);
        } else if (data.full) {
          setImg(data.full);
        } else if (data.small) {
          setImg(data.small);
        }
      } else if (widthImg <= 1264) {
        if (data.large) {
          setImg(data.large);
        } else if (data.full) {
          setImg(data.full);
        } else if (data.medium) {
          setImg(data.medium);
        } else if (data.small) {
          setImg(data.small);
        }
      } else if (widthImg <= 1904) {
        if (data.full) {
          setImg(data.full);
        }
      } else if (widthImg <= 2600 && data.full) {
        if (data.full) {
          setImg(data.full);
        } else if (data.large) {
          setImg(data.large);
        } else if (data.medium) {
          setImg(data.medium);
        } else if (data.small) {
          setImg(data.small);
        }
      }
    }
  }, [widthImg]);
  return (
    <div
      style={{
        backgroundOrigin: 'center',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundImage: `url(${img === null ? errorImage : img})`,
        width: sizeImg,
        height: sizeImg,
      }}
    ></div>
    // <img src={img === null ? errorImage : img} />
  );
};
export default SelectSizeImg;

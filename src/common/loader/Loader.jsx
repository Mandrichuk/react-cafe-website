import React, {useState, useEffect} from 'react';
import styles from "./loader.module.css";
import Header from '../../user/components/header/Header';
import ClockLoader from "react-spinners/ClockLoader";
import { useDispatch } from 'react-redux';
import { stopLoading } from '../../features/loading';
import { useSelector } from 'react-redux';
import images from "../../constants/index";



function Loader() {
  const dispatch = useDispatch(); 
  const loading = useSelector((state) => state.value);
  const [imageSrc, setImageSrc] = useState(images.coffeeGif);

  useEffect(() => {
    setTimeout(() => {
      dispatch(stopLoading());
    }, 3220);
  }, []);

  return (
    <div className={`${styles.loader}`}>
      <div className={`w-full bg-black h-[70px] fixed top-0 flex flex-col items-center justify-center`}>
        <img src={images.textLogo} className={`h-[25px] object-cover `} />
      </div>
      <img src={imageSrc} className={`${styles.gif} w-full h-full object-cover`} />
    </div>
  );
}

export default Loader;
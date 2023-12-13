import React, {useState, useEffect} from 'react';
import styles from "./loader.module.css";
import { useDispatch } from 'react-redux';
import { stopLoading } from '../../features/loading';
import { useSelector } from 'react-redux';
import images from "../../constants/index";
import EmptyHeader from '../EmptyHeader';


function Loader() {
  const dispatch = useDispatch(); 
  const [imageSrc, setImageSrc] = useState(images.coffeeGif);

  useEffect(() => {
    setTimeout(() => {
      dispatch(stopLoading());
    }, 3220);
  }, []);

  return (
    <div className={`${styles.loader}`}>
      <EmptyHeader />
      <img src={imageSrc} className={`${styles.gif} w-full h-full object-cover`} />
    </div>
  );
}

export default Loader;
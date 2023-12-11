import React, {useState, useEffect} from 'react';
import styles from "./loader.module.css";
import Header from '../../user/components/header/Header';
import ClockLoader from "react-spinners/ClockLoader";
import { useDispatch } from 'react-redux';
import { stopLoading } from '../../features/loading';
import { useSelector } from 'react-redux';
// import images from "../../"

function Loader() {
  const dispatch = useDispatch(); 
  const loading = useSelector((state) => state.value);

  useEffect(() => {
    setTimeout(() => {
      dispatch(stopLoading());
    }, 3000);
  }, []);

  return (
    <div className={`${styles.loader}`}>
      <Header />
      <ClockLoader
          color={"#05442e"}
          loading={loading}
          size={300}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </div>
  );
}

export default Loader;
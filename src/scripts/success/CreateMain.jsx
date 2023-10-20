import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/pages/success.module.css";
import { PiConfettiFill } from 'react-icons/pi';

export default function CreateMain(props) {
  console.log(props)

  useEffect(() => {
    props.handleHistoryAdd("comment");
  }, []);

  return (
    <main className={`${styles.mainContainer} text-black mt-[80px] flex flex-col justify-center items-center`}> 
      <div className={`${styles.successContainer} font-bold mt-[40px] text-[3.3rem] flex flex-row items-center justify-center`}>
        Успіх! 
        <PiConfettiFill className={`${styles.successIcon} ml-[10px] text-custom-green`} />
      </div>
      <div className={`${styles.tagline} text-[1.4rem] max-w-[400px] mt-[10px] text-gray-500`}>
        Ваше замовлення прийнято, ви можете переглянути його в своєму <Link onClick={props.setCurrentLink} to="/login" className={`${styles.profileLink} underline text-blue-700`}>профілі</Link>
      </div>
    </main>
  );
}

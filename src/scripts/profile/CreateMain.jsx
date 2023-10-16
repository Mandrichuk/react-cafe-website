import React from "react";
import styles from "../../styles/pages/profile.module.css";

import History from "./materials/CreateHistory.jsx";


export default function CreateMain(props) {
  return (
    <main className={`${styles.mainContainer} mt-[100px] text-black`}> 
      <div className={`${styles.allInfoContainer} max-w-[600px] w-[60%] flex flex-col items-center justify-center`}>
        <div className={`${styles.infoContainer} w-[80%] flex items-center justify-center p-[10px] border-[2px] text-[1.5rem] mb-[20px]`}>
          Имя 
        </div>
        <div className={`${styles.infoContainer} w-[80%] flex items-center justify-center p-[10px] border-[2px] text-[1.5rem] mb-[20px]`}>
          Номер телефону 
        </div>
        <div className={`${styles.infoContainer} w-[80%] flex items-center justify-center p-[10px] border-[2px] text-[1.5rem] mb-[80px]`}>
          Бонуси 
        </div>
      </div>

      {CreateHistory(props.history)}
    </main>
  );
}

function CreateHistory(history) {
  if (history) return history.map(historyItem => <History history={historyItem} />);

}
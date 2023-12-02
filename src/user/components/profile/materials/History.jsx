import React, {useState} from "react";
import styles from "../../../styles/pages/profile.module.css";

import getMealName from "../../shared/getMeal.js";
import getTotalPrice from "../../shared/getTotalPrice.js";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export default function History(props) {
  console.log(props.history.price)

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return ( 
    <li>
      <input type="radio" name="accordion" id={`radio-${props.history.id}`} checked={isOpen} onChange={toggleAccordion}/>
      <label htmlFor={`radio-${props.history.id}`} className={`flex items-center justify-between ${styles.labelTitle}`}>
        <div className={`${styles.labelTitle} flex items-center justify-between w-full `} onClick={toggleAccordion}>
          <MdOutlineKeyboardArrowDown className={`${styles.downArrow} text-black`} />
          <div>
            {props.history.price}грн
          </div>
          <div>
            {props.history.date} 
          </div>
        </div>
      </label>
      <div className={`${styles.content}`} style={{ maxHeight: isOpen ? '1500px' : '0', padding: isOpen ? '10px' : '0' }}>
        {HistoryItem(props.history.cart)}
      </div>
    </li>
  );
}


function HistoryItem(products) {

  if (!products) {
    return null;
  }
  
  const productsHTML = products.map(item => {
    return (
      <div key={item.id} className={`${styles.mealContainer} text-black  flex flex-row items-center justify-between pb-[20px] text-[1.3rem] px-[10px]`}>
        hello
      </div>
    );
  });

  return productsHTML;
}












// export default function CreateHistory(props) {
//   return (
//     <div className={`${styles.orderContainer} flex flex-col items-center mb-[20px] w-full`}>
//       <div className={`${styles.dateAndPriceContainer} flex flex-row justify-between mb-[10px] w-full`}>
//         <div className={`${styles.dateContainer} flex items-center justify-center  w-full  titleText input rounded-r-none`}>
//           {props.history.date}
//         </div>
//         <div className={`${styles.priceContainer} flex items-center justify-center w-full input  rounded-l-none titleText`}>
//           {props.history.price}грн
//         </div>
//       </div>
//       { props.history.cart && props.history.cart.map(meal => {
//         return <CreateHistoryItem meal={meal}/>
//       })
//       }
//     </div>
//   );
// }

// function CreateHistoryItem(props) {
//   const currentMeal = getMealName(props.meal.id);
//   return (
//     <>
//     <div className={`${styles.allMealsContainer}  w-full flex flex-col justify-between input mb-[6px]`}>
//       <div className={`${styles.mealContainer} w-full flex flex-row items-center justify-between text-[1.3rem]`}>
//         <div className={`${styles.mealNameContainer} ml-[3%]`}>
//           {currentMeal.name}
//         </div>
//         <div className={`${styles.mealAmountContainer} mr-[3%]`}>
//           {props.meal.amount}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }
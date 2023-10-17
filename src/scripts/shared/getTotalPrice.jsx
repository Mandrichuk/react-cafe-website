import menuData from "../../data/menu/menuData.js";

export default function getTotalPrice(arr) {
  let totalPrice = 0;
   arr.forEach(arrItem => {
     menuData.forEach(menuItem => {
       menuItem.products.forEach(product => {
         if (product.id === arrItem.id) {
           totalPrice += product.price * arrItem.amount;
         }
       });
     });
   });
 
   return totalPrice;
}
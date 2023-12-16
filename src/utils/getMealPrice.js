import menuData from "../constants/index";

export default function getMealPrice(id, amount) {
  let mealPrice = 0;
  menuData.forEach((item) => {
    item.products.forEach((menuMeal) => {
      if (id === menuMeal.id) {
        mealPrice = menuMeal.price * amount;
      }
    });
  });
  return mealPrice;
}

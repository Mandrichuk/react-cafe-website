import menuData from "../constants/index";

export default function mealById(id) {
  let currectMeal;
  menuData.forEach((item) => {
    item.products.forEach((meal) => {
      if (meal.id === id) {
        currectMeal = meal;
        return;
      }
    });
  });

  return currectMeal;
}

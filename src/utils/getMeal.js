import { menuData } from "../constants/index";

export default function mealById(id) {
  for (const item of menuData) {
    for (const meal of item.products) {
      if (meal.id === id) {
        return meal;
      }
    }
  }
  return null;
}


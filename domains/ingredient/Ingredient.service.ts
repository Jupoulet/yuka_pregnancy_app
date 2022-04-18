import { Ingredient, IngredientWithAdvice } from "../ingredient/Ingredient.type";
import { COFFEE_IDS, COFFEE_NAMES } from "./Ingredient.constants";

export const ingredientToIngredientWithAdvice = (
  ingredient: Ingredient,
  advice: IngredientWithAdvice['advice'],
) => {
  return {
    ...ingredient,
    advice,
  }
}

export const isCoffee = (ingredient: Ingredient): boolean => {
  if (ingredient.percent_estimate < 10) return false;
  if (COFFEE_IDS.includes(ingredient.id)) return true;
  return COFFEE_NAMES.includes(ingredient.text);
}

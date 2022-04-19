import { Ingredient as IngredientType } from '../open-food-fact/OpenFoodFactAPI.type';

export type Ingredient = IngredientType;

export interface IngredientWithAdvice extends Ingredient {
  advice: string;
}

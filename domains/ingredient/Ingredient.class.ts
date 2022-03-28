import { Ingredient as IngredientType } from "../../models/OpenFoodFactAPI";
import { COFFEE_IDS, COFFEE_NAMES } from "./Ingredient.constants";

export class Ingredient {
  id: IngredientType['id'] = '';
  percent_estimate: IngredientType['percent_estimate'] = 0;
  rank?: IngredientType['rank'];
  text: IngredientType['text'] = '';
  vegan: 'yes' | 'no' = 'no';
  vegetarian: 'yes' | 'no' = 'no';

  constructor(ingredient: IngredientType) {
    const {
      id,
      percent_estimate,
      rank,
      text,
      vegan,
      vegetarian
    } = ingredient;

    this.id = id;
    this.percent_estimate = percent_estimate;
    this.rank = rank;
    this.text = text;
    this.vegan = vegan;
    this.vegetarian = vegetarian;
  }

  isCoffee(): boolean {
    if (this.percent_estimate < 10) return false;
    if (COFFEE_IDS.includes(this.id)) return true;
    return COFFEE_NAMES.includes(this.text);
  }
}
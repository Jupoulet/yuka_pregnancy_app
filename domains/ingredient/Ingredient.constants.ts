import { Ingredient as IngredientType } from "../../domains/ingredient/Ingredient.type";

export const COFFEE_IDS: IngredientType['id'][] = [
  'en:coffee',
  'en:ground-coffee',
  'fr:chicoree-soluble',
  'en:instant-coffee',
  'fr:cafe-moulu-pur-arabica'
];

export const COFFEE_NAMES: IngredientType['text'][] = [
  'Café',
  'Café moulu',
  'Café soluble'
]
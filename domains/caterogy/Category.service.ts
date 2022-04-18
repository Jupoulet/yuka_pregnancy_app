import { ADVICES } from "../advices/Advices.constants";
import { ALCOHOL_CATEGORIES, COFFEE_CATEGORIES } from "./Category.constants";
import { Category, UnsafeCategories } from "./Category.type";

const ALCOHOL_ID = ADVICES.alcohol.id;
const COFFEE_ADVICE_ID = ADVICES.coffee.id;

const isCategoryCoffee = (category: Category): boolean => {
  return COFFEE_CATEGORIES.includes(category);
}

const isCategoryAlcohol = (category: Category): boolean => {
  return ALCOHOL_CATEGORIES.includes(category);
}

export const scanUnsafeCategories = (categoriesString: Category | undefined): UnsafeCategories => {
  const unsafeCategories: UnsafeCategories = { categories: [], advices: [] };
  if (!categoriesString) return unsafeCategories;
  const categories: Category[] = categoriesString.split(', ');
  for(const category of categories) {
    const isCoffee = isCategoryCoffee(category);
    const isAlcohol = isCategoryAlcohol(category);
    if (isCoffee && !unsafeCategories.advices.some(advice => advice.id === COFFEE_ADVICE_ID)) {
      unsafeCategories.categories.push(category);
      unsafeCategories.advices.push(ADVICES.coffee)
    }
    if (isAlcohol && !unsafeCategories.advices.some(advice => advice.id === ALCOHOL_ID)) {
      unsafeCategories.categories.push(category);
      unsafeCategories.advices.push(ADVICES.alcohol)
    }
  }
  return unsafeCategories;
}
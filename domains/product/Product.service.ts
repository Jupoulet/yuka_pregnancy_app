import { Product } from '../../domains/product/Product.type';
import { ConsumeWithCaution, DangerousReasonType } from './Product.type';
import { ingredientToIngredientWithAdvice, isCoffee } from '../ingredient/Ingredient.service';
import { ADVICES } from './Product.constant';
import { scanUnsafeCategories } from '../caterogy/Category.service';

export const isProductDangerous = (product: Product): DangerousReasonType => {
  return {
    categories: [],
    advices: [],
    ingredients: [],
  };
};

export const isProductToConsumeWithCaution = (product: Product): ConsumeWithCaution => {
  const returnValue: ConsumeWithCaution = {
    categories: [],
    advices: [],
    ingredients: [],
  };

  // TODO, faire une fonction qui loop sur les catégories et qui renvoie pour chaque itération si une catégorie est dangereuse ou non

  const unsafeCategories = scanUnsafeCategories(product.categories);
  if (unsafeCategories.categories.length) {
    returnValue.categories = [...returnValue.categories, ...unsafeCategories.categories];
    returnValue.advices = [...returnValue.advices, ...unsafeCategories.advices];
  }

  for (const ingredient of product.ingredients) {
    if (isCoffee(ingredient)) {
      returnValue.ingredients.push(ingredientToIngredientWithAdvice(ingredient, ADVICES.coffee.text));
    }
  }

  return returnValue;
};

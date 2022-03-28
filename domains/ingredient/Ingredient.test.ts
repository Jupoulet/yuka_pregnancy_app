import { Ingredient } from "./Ingredient.class";

describe('Ingredient class', () => {
  describe('isCofee method', () => {
    it ('Returns true if ingredient is among coffee listed id', () => {
      const ingredientInstance = new Ingredient({
        id: 'en:ground-coffee',
        text: 'Café Moulu',
        percent_estimate: 11,
        vegan: 'no',
        vegetarian: 'no'
      });

      expect(ingredientInstance.isCoffee()).toBe(true);
    });

    it ('Returns false if ingredient is not among coffee listed id or names', () => {
      const ingredientInstance = new Ingredient({
        id: 'en:salmon',
        text: 'Salmon',
        percent_estimate: 11,
        vegan: 'no',
        vegetarian: 'no'
      });

      expect(ingredientInstance.isCoffee()).toBe(false);
    });

    it ('Returns true if ingredient is among coffee listed names', () => {
      const ingredientInstance = new Ingredient({
        id: 'en:salmon',
        text: 'Café Moulu',
        percent_estimate: 9,
        vegan: 'no',
        vegetarian: 'no'
      });

      expect(ingredientInstance.isCoffee()).toBe(false);
    });

    it ('Returns false if ingredient reprensent less than 10% of product ingredients', () => {
      const ingredientInstance = new Ingredient({
        id: 'en:ground-coffee',
        text: 'Café Moulu',
        percent_estimate: 9,
        vegan: 'no',
        vegetarian: 'no'
      });

      expect(ingredientInstance.isCoffee()).toBe(false);
    });
  })
});

export {}
import { Ingredient } from "../ingredient/Ingredient.type";
import { isCoffee } from "./Ingredient.service";

describe('Ingredient services', () => {
  describe('isCofee function', () => {
    it ('Returns true if ingredient is among coffee listed id', () => {
      const ingredient: Ingredient = {
        id: 'en:ground-coffee',
        text: 'Café Moulu',
        percent_estimate: 11,
        vegan: 'no',
        vegetarian: 'no'
      };

      expect(isCoffee(ingredient)).toBe(true);
    });

    it ('Returns false if ingredient is not among coffee listed id or names', () => {
      const ingredient: Ingredient = {
        id: 'en:salmon',
        text: 'Salmon',
        percent_estimate: 11,
        vegan: 'no',
        vegetarian: 'no'
      };

      expect(isCoffee(ingredient)).toBe(false);
    });

    it ('Returns true if ingredient is among coffee listed names', () => {
      const ingredient: Ingredient = {
        id: 'en:salmon',
        text: 'Café Moulu',
        percent_estimate: 9,
        vegan: 'no',
        vegetarian: 'no'
      };

      expect(isCoffee(ingredient)).toBe(false);
    });

    it ('Returns false if ingredient reprensent less than 10% of product ingredients', () => {
      const ingredient: Ingredient = {
        id: 'en:ground-coffee',
        text: 'Café Moulu',
        percent_estimate: 9,
        vegan: 'no',
        vegetarian: 'no'
      };

      expect(isCoffee(ingredient)).toBe(false);
    });
  })
});

export {}
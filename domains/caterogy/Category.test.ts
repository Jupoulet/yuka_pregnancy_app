import { ADVICES } from '../advices/Advices.constants';
import { scanUnsafeCategories } from './Category.service';

const COFFEE_ADVICE_ID = ADVICES.coffee.id;
const ALCOHOL_ADVICE_ID = ADVICES.alcohol.id;

describe('Category services', () => {
  describe('scanUnsafeCategories', () => {
    it('Return advices when product belongs to Cofee categories', () => {
      const categories = 'Café, Toto, Doe';
      const unsafeCategories = scanUnsafeCategories(categories);
      expect(unsafeCategories.categories.length).toEqual(1);
      expect(unsafeCategories.advices[0].id).toEqual(COFFEE_ADVICE_ID);
    });

    it('Return advices when product belongs to Alcohol categories', () => {
      const categories = 'Bières, Toto, John Doe';
      const unsafeCategories = scanUnsafeCategories(categories);
      expect(unsafeCategories.categories.length).toEqual(1);
      expect(unsafeCategories.advices[0].id).toEqual(ALCOHOL_ADVICE_ID);
    });

    it('Return all categories and advices when they are severals match', () => {
      const categories = 'Bières, Café, John Doe';
      const unsafeCategories = scanUnsafeCategories(categories);
      expect(unsafeCategories.categories.length).toEqual(2);
      expect(unsafeCategories.advices.length).toEqual(2);
    });

    it('Return only one occurences of unsafe categories if several same matches', () => {
      const categories = 'Bières, Beers, Boissons alcoolisées';
      const unsafeCategories = scanUnsafeCategories(categories);
      expect(unsafeCategories.categories.length).toEqual(1);
      expect(unsafeCategories.advices[0].id).toEqual(ALCOHOL_ADVICE_ID);
    });
  });
});

export {};

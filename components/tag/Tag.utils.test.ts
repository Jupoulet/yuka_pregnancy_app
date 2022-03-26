import { listedTagColors } from './Tag';
import { getRandomArbitrary, getTagColor } from './Tag.utils';

describe('Utils functions', () => {
  describe('GetTagColor', () => {
    it('GetTagColor should return color tag with what ever index given', () => {
      const color = getTagColor(0);
      expect(color).toEqual("slate")
    });

    it('Should return a color even if index is superior to colors list length', () => {
      const color = getTagColor(999);
      expect(color).toBeTruthy;
      expect(listedTagColors.includes(color)).toEqual(true);
    })
  })

  describe('GetRandomNumber', () => {
    it('Return a random number among two maximum values', () => {
      const randomNumber = getRandomArbitrary(1, 10);
      expect(randomNumber >= 1 && randomNumber <= 10).toEqual(true);
    })

    it('Works with negative values', () => {
      const randomNumber = getRandomArbitrary(-100, 10);
      expect(randomNumber >= -100 && randomNumber <= 10).toEqual(true);
    })
  })

})
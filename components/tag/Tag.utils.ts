import { listedTagColors, TagProps } from './Tag';

export function getRandomArbitrary(min: number = 0, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const getTagColor = (index: number): TagProps['color'] => {
  const maxLength = listedTagColors.length;
  if (index >= maxLength) return getTagColor(index - maxLength);

  return listedTagColors[index];
};

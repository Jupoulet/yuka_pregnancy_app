export function getRandomArbitrary(min: number = 0, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
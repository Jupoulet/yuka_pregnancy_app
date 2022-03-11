import { getTagColor } from './utils';

describe('Utils functions', () => {
  it('GetTagColor should return color tag with what ever index given', () => {
    const color = getTagColor(1);
    expect(color).toEqual("slate")
  })
})
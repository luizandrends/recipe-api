import parseStringToArray from '../src/modules/recipes/utils/parseStringToArray';

describe('Parse string to array', () => {
  it('should be able to parse and put in alphabetic order a string to array', async () => {
    const string = 'banana, watermelon, pineapple, apple';

    const parsedString = parseStringToArray(string);

    const arrayOfString = ['apple', 'banana', 'pineapple', 'watermelon'];

    expect(parsedString).toEqual(arrayOfString);
  });
});

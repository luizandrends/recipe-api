import parseStringToArray from './parseStringToArray';

describe('Parse string to array', () => {
  it('should be able to parse an string to array', async () => {
    const string = 'banana, watermelon, pineapple, apple';

    const parsedString = parseStringToArray(string);

    const arrayOfString = ['banana', 'watermelon', 'pineapple', 'apple'];

    expect(parsedString).toEqual(arrayOfString);
  });
});

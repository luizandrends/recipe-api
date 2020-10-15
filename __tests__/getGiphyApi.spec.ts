import giphyApi from '../src/modules/recipes/apis/giphy';

describe('Get gyphy', () => {
  it('should be able to get giphy from the giphy API', async () => {
    const gifName = 'Cilantro when You Need It';

    const response = await giphyApi.get(
      `/search?api_key=eKrrGZW2I9pe64cUh6GjEoOAMjVJNjMI&q=${gifName}&limit=10&g=13`
    );

    expect(response.status).toBe(200);
  });
});

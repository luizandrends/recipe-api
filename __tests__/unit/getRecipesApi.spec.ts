import recipesApi from '../../src/modules/recipes/apis/recipePuppy';

describe('Get recipes', () => {
  it('should be able to get recipes', async () => {
    const response = await recipesApi.get('/?i=onions');

    expect(response.status).toBe(200);
  });
});

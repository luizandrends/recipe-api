import { AxiosResponse } from 'axios';

import getGiphy from '@modules/recipes/utils/getGiphy';
import parseStringToArray from '@modules/recipes/utils/parseStringToArray';

import recipePuppyApi from '@modules/recipes/apis/recipePuppy';

import IRecipesInterface from '../../../interfaces/IRecipesInterface';

interface IDataType {
  ingredient_1?: string | undefined;
  ingredient_2?: string | undefined;
  ingredient_3?: string | undefined;
}

interface IResultsType {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
}

class RecipesRepository implements IRecipesInterface {
  public async findRecipes({
    ingredient_1,
    ingredient_2,
    ingredient_3,
  }: IDataType): Promise<AxiosResponse> {
    let index = 0;
    const response = await recipePuppyApi.get(
      `/?i=${ingredient_1}, ${ingredient_2}, ${ingredient_3}`
    );
    const { results } = response.data;

    for (index = 0; index < results.length; index++) {
      const findRecipeByName = results.find(
        (result: IResultsType) => result.title === results[index].title
      );

      const giphyUrl = await getGiphy(findRecipeByName.title);

      const parsedIngredientsToArray = parseStringToArray(
        findRecipeByName.ingredients
      );

      Object.assign(findRecipeByName, {
        ingredients: parsedIngredientsToArray,
      });

      Object.assign(findRecipeByName, { link: findRecipeByName.href });
      findRecipeByName.href = undefined;

      Object.assign(findRecipeByName, { gif: giphyUrl });
      findRecipeByName.thumbnail = undefined;
    }

    return results;
  }
}

export default RecipesRepository;

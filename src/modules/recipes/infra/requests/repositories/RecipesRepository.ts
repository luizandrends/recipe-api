import { AxiosResponse } from 'axios';

import recipePuppyApi from '@modules/recipes/apis/recipePuppy';
import IRecipesInterface from '../../../interfaces/IRecipesInterface';

interface IDataType {
  ingredient_1: string;
  ingredient_2: string;
}

class RecipesRepository implements IRecipesInterface {
  public async findRecipes({
    ingredient_1,
    ingredient_2,
  }: IDataType): Promise<AxiosResponse> {
    const response = await recipePuppyApi.get(
      `/?i=${ingredient_1}, ${ingredient_2}`
    );

    return response.data;
  }
}

export default RecipesRepository;

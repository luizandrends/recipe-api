import { inject, injectable } from 'tsyringe';
import { AxiosResponse } from 'axios';

import AppError from '@shared/errors/AppError';
import IRecipesInterface from '../interfaces/IRecipesInterface';

interface IRequest {
  ingredient_1?: string | undefined;
  ingredient_2?: string | undefined;
  ingredient_3?: string | undefined;
}

@injectable()
class FindRecipesService {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesInterface
  ) {}

  public async execute({
    ingredient_1,
    ingredient_2,
    ingredient_3,
  }: IRequest): Promise<AxiosResponse> {
    const findAllRecipes = await this.recipesRepository.findRecipes({
      ingredient_1,
      ingredient_2,
      ingredient_3,
    });

    if (!findAllRecipes) {
      throw new AppError('Recipe not found or api unavailable', 400);
    }

    return findAllRecipes;
  }
}

export default FindRecipesService;

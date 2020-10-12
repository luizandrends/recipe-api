import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindRecipesService from '@modules/recipes/services/FindRecipesService';

class FindRecipesController {
  public async find(request: Request, response: Response): Promise<Response> {
    const { ingredient_1, ingredient_2, ingredient_3 } = request.query;

    const ingredient1 = String(ingredient_1);
    const ingredient2 = String(ingredient_2);
    const ingredient3 = String(ingredient_3);

    const findRecipesService = container.resolve(FindRecipesService);

    const findRecipes = await findRecipesService.execute({
      ingredient_1: ingredient1,
      ingredient_2: ingredient2,
      ingredient_3: ingredient3,
    });

    return response.json(findRecipes);
  }
}

export default FindRecipesController;

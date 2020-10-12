import { container } from 'tsyringe';

import IRecipesInterface from '@modules/recipes/interfaces/IRecipesInterface';
import RecipesRepository from '@modules/recipes/infra/requests/repositories/RecipesRepository';

container.registerSingleton<IRecipesInterface>(
  'RecipesRepository',
  RecipesRepository
);

import { Router } from 'express';

import FindRecipesController from '../controllers/FindRecipesController';

const findRecipesController = new FindRecipesController();

const recipeRouter = Router();

recipeRouter.get('/find', findRecipesController.find);

export default recipeRouter;

import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import FindRecipesController from '../controllers/FindRecipesController';

const findRecipesController = new FindRecipesController();

const recipeRouter = Router();

recipeRouter.get(
  '/find',
  celebrate({
    [Segments.QUERY]: {
      ingredient_1: Joi.string().required(),
      ingredient_2: Joi.string(),
      ingredient_3: Joi.string(),
    },
  }),
  findRecipesController.find
);

export default recipeRouter;

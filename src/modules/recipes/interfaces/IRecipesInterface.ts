import { AxiosResponse } from 'axios';

export interface IDataType {
  ingredient_1?: string;
  ingredient_2?: string;
}

export default interface IRecipesInterface {
  findRecipes({
    ingredient_1,
    ingredient_2,
  }: IDataType): Promise<AxiosResponse>;
}

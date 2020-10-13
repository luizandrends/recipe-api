import { AxiosResponse } from 'axios';

import giphyApi from '../apis/giphy';

const getGiphy = async (gifName: string): Promise<AxiosResponse> => {
  const response = await giphyApi.get(
    `/search?api_key=${process.env.GIPHY_API_KEY}&q=${gifName}&limit=10&g=10`
  );

  return response.data.data[0].url;
};

export default getGiphy;

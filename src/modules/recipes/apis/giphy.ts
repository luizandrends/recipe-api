import axios from 'axios';

const giphyApi = axios.create({
  baseURL: 'api.giphy.com/v1/gifs/search',
});

export default giphyApi;

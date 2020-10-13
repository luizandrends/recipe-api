import axios from 'axios';

const giphyApi = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
});

export default giphyApi;

import axios from 'axios';

const proxy = url => 'https://run.mocky.io' + url;

const api = {
  get(url) {
    return axios.get(proxy(url));
  },
};

export default api;

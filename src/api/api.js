import axios from 'axios';

const api = {
  get(url) {
    return axios.get(url);
  },
};

export default api;

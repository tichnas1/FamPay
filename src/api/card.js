import api from './api';

const cardApi = {
  async getAllCards() {
    try {
      const res = await api.get('/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17');
      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  },
};

export default cardApi;

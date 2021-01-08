import axios from 'axios';
const API_KEY = '19741747-aaef32235b2696c68d5824b79';
const BASE_URL = 'https://pixabay.com/api';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};
const getImages = async (q, page = 1) => {
  try {
    const { data } = await axios.get('/', { params: { q, page } });
    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default getImages;

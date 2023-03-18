
import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID rKqkR6gs2RUtwNL7zxXvgxnkpw6piN05Fo8mWcuRdcA',
    },
    params: {
      query: term,
    },
  });
  
  return response.data.results;
};

export default searchImages;

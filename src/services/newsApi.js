import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const baseUrl = 'https://newsapi.org/v2';

export const fetchArticles = async ({ country, category }) => {
  try {
    const params = {
      apiKey: apiKey,
      ...(country && { country }),
      ...(category && { category }),
    };

    const response = await axios.get(`${baseUrl}/top-headlines`, { params });
    return response.data.articles; 
  } catch (error) {
    console.error('Haberleri alırken hata oluştu:', error);
    return [];
  }
};



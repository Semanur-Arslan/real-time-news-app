import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const baseUrl = 'https://newsapi.org/v2';

export const fetchTopHeadlines = async (country = 'us') => {
  try {
    const response = await axios.get(`${baseUrl}/top-headlines`, {
      params: {
        country,
        apiKey: apiKey,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Haberleri alırken hata oluştu:', error);
    return [];
  }
};

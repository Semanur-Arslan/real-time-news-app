import API from './axiosInterceptor';

const handleApiError = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        return 'Bad Request. The request was unacceptable, often due to a missing or misconfigured parameter.';
      case 401:
        return 'Unauthorized. Your API key is missing from the request, or it is incorrect.';
      case 429:
        return 'Too Many Requests. You made too many requests within a window of time. Please wait a while.';
      case 500:
        return 'Server Error. Something went wrong on our side.';
      default:
        return error.response.data.message || 'An unknown error occurred. Please try again later.';
    }
  }
  return 'A connection error occurred. Please check your internet connection.';
};

export const fetchArticles = async ({ country, category, sources }) => {
  try {
    const params = { ...(country && { country }), ...(category && { category }), ...(sources && { sources }) };
    const response = await API.get('/top-headlines', { params });
    return response.data.articles;
  } catch (error) {
    console.log(error)
    throw new Error(handleApiError(error));
  }
};

export const fetchSources = async (category) => {
  try {
    const params = { ...(category && { category }) };
    const response = await API.get('/top-headlines/sources', { params });
    return response.data.sources;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

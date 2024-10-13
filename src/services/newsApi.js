import API from './axiosInstance';

export const fetchArticles = async ({ country, category }) => {
  try {
    const params = {
      ...(country && { country }),
      ...(category && { category }),
    };

    const response = await API.get('/top-headlines', { params });

    return response.data.articles;

  } catch (error) {
    let errorMessage;

    if (error.response) {
      switch (error.response.status) {

        case 400:
          errorMessage = 'Bad Request. The request was unacceptable, often due to a missing or misconfigured parameter.';
          break;
        case 401:
          errorMessage = 'Unauthorized. Your API key is missing from the request, or it is incorrect.';
          break;
        case 429:
          errorMessage = 'Too Many Requests. You made too many requests within a window of time. Please wait a while.';
          break;
        case 500:
          errorMessage = 'Server Error. Something went wrong on our side.';
          break;
        default:
          errorMessage = error.response.data.message || 'An unknown error occurred. Please try again later.';
      }
    } else {
      errorMessage = 'A connection error occurred. Please check your internet connection.';
    }
    throw errorMessage;
  }
};


// import API from './axiosInstance';

// export const fetchArticles = async ({ country, category }) => {
//   try {
//     const params = {
//       ...(country && { country }),
//       ...(category && { category }),
//     };

//     const response = await API.get('/top-headlines', { params });

//     return response.data.articles; 

//   } catch (error) {
//     console.error('An error occurred while retrieving the news:', error);
//     throw error; 
//   }
// };




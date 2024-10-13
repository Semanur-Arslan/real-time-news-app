import { useState, useEffect } from "react";
import { fetchArticles } from "@/services/newsApi";

export default function useFetchArticles({ country, category }, interval = 60000) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const getArticles = async () => {
    try {
      const response = await fetchArticles({ country, category });
      setArticles(response);
      setError(null); 
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(getArticles, interval);

    return () => clearInterval(intervalId);
  }, [country, category, interval]);

  return { articles, error };
}

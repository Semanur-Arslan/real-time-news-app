import { useState, useEffect } from "react";
import { fetchArticles } from "@/services/newsApi";

export default function useFetchArticles({ country, category, sources }, interval = 60000) {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
      const response = await fetchArticles({ country, category, sources });
      setArticles(response);
  };

  useEffect(() => {
    const intervalId = setInterval(getArticles, interval);

    return () => clearInterval(intervalId);
  }, [country, category, sources, interval]);

  return { articles };
}

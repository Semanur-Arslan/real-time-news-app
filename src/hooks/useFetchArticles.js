import { useState, useEffect } from "react";
import { fetchArticles } from "@/services/newsApi";

export default function useFetchArticles({ country, category }, interval = 60000) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getArticles = async () => {
    try {
      setLoading(true);
      const response = await fetchArticles({ country, category });
      setArticles(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
   
    const intervalId = setInterval(getArticles, interval); // Belirli aralıklarla tekrar çağırma

    return () => clearInterval(intervalId); // Temizlik
  }, [country, category, interval]); // Parametre değiştiğinde tekrar çalışır

  return { articles, loading, error, setArticles };
}

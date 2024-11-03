
import { useState, useEffect, useRef } from "react";
import { fetchArticles } from "@/services/newsApi";

export default function useFetchArticles({ country, category, source }, interval = 60000) {
  const [articles, setArticles] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const lastFetchedDates = useRef({});
  const seenNotifications = useRef(new Set());


  const getArticles = async () => {
    const response = await fetchArticles({ country, category, sources: source });
    
    const newNotifications = [];

    response.forEach(article => {
      const { source, publishedAt } = article;
      const articleDate = new Date(publishedAt);
      const sourceId = source.id;

      if (lastFetchedDates.current[sourceId] && articleDate > lastFetchedDates.current[sourceId]) {
        if (!seenNotifications.current.has(article.title)) {
          newNotifications.push(article);
          seenNotifications.current.add(article.title);
        }
      }

      if (!lastFetchedDates.current[sourceId] || articleDate > lastFetchedDates.current[sourceId]) {
        lastFetchedDates.current[sourceId] = articleDate;
      }
    });

    setArticles(response);
    if (newNotifications.length > 0) {
      setNotifications(newNotifications);
    }
  };

  useEffect(() => {
    getArticles();
    const intervalId = setInterval(getArticles, interval);
    return () => clearInterval(intervalId);
  }, [country, category, source, interval]);

  return { articles, notifications };
}



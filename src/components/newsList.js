'use client'
import useFetchArticles from "@/hooks/useFetchArticles";
import NewsCard from "@/components/newsCard";
import styles from "@/styles/newList.module.css";
import { toast } from 'react-toastify';
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function NewsList({ country, category, source, initialArticles, displayCount }) {

  const router = useRouter();

  const { articles, notifications } = useFetchArticles({ country, category, source });
  const displayArticles = articles && articles.length > 0 ? articles : initialArticles;
  const articlesToDisplay = displayCount ? displayArticles.slice(0, displayCount) : displayArticles;

  useEffect(() => {
  
    if (notifications && notifications.length > 0) {
      notifications.forEach((notification) => {
        toast.info(
          <div className="toastContainer" onClick={() => router.push(`/source/${notification.source.id}`)}>
            <div>
              <h5>New News!</h5>
              <span>{notification.source.name}</span>
            </div>
           
          </div>
        );
      });
    }
  }, [notifications]);

  return (
    <>
      <div className={styles.gridContainer}>
        {Array.isArray(articlesToDisplay) && articlesToDisplay.map((article, index) => (
          <NewsCard key={index} news={article} />
        ))}
      </div>

    </>

  );
}

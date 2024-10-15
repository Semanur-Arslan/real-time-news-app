'use client'
import useFetchArticles from "@/hooks/useFetchArticles";
import NewsCard from "@/components/newsCard";
import styles from "@/styles/newList.module.css";

export default function NewsList({ country, category, initialArticles }) {

  const { articles } = useFetchArticles({ country, category });
  const displayArticles = articles && articles.length > 0 ? articles : initialArticles;


  return (
    <>
      <div className={styles.gridContainer}>
        {Array.isArray(displayArticles) && displayArticles.map((article, index) => (
          <NewsCard key={index} news={article} />
        ))}
      </div>

    </>

  );
}

'use client'
import useFetchArticles from "@/hooks/useFetchArticles";
import NewsCard from "@/components/newsCard";
import styles from "@/styles/page.module.css";
import ErrorMessage from "./errorMessage";

export default function NewsList({ country, category, initialArticles, serverError }) {

  // const { articles, error } = useFetchArticles({ country, category });
  // const displayArticles = articles && articles.length > 0 ? articles : initialArticles;

  let articles = initialArticles;
  let error = null;

  if (!serverError) {
    const { articles: fetchedArticles, error: fetchError } = useFetchArticles({ country, category });

    articles = fetchedArticles.length > 0 ? fetchedArticles : initialArticles;
    error = fetchError;
  }

  return (
    <>
      {error && <ErrorMessage message={error} />}
      <div className={styles.gridContainer}>
        {Array.isArray(articles) && articles.map((article, index) => (
          <NewsCard key={index} news={article} />
        ))}
      </div>

    </>

  );
}

'use client'
import useFetchArticles from "@/hooks/useFetchArticles";
import NewsCard from "@/components/newsCard";
import styles from "@/styles/page.module.css";

export default function NewsList({ country, category, initialArticles }) {
  const { articles, loading, error } = useFetchArticles({ country, category });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  const displayArticles = articles.length > 0 ? articles : initialArticles;

  return (
    <div className={styles.gridContainer}>
      {displayArticles.map((article, index) => (
        <NewsCard key={index} news={article} />
      ))}
    </div>
  );
}

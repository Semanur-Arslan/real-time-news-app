'use client'
import { useEffect, useState } from 'react';
import { fetchArticles } from '@/services/newsApi';
import Title from '@/components/title';
import NewsList from '@/components/newsList';
import Categories from '@/components/catagories';

export default function CategoryPage({ params }) {
  const { category } = params;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      const fetchedArticles = await fetchArticles({ category });
      setArticles(fetchedArticles);
      setLoading(false);
    };

    loadArticles();
  }, [category]);

  return (
    <>
      <Categories />
      <div>
        <Title title={`${category} Category`} />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <NewsList initialArticles={articles} category={category} />
        )}
      </div>
    </>
  );
}


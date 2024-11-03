"use client";

import { useEffect, useState } from 'react';
import Title from '@/components/title';
import NewsList from '@/components/newsList';
import { fetchArticles } from '@/services/newsApi';

export default function SourcePage({ params }) {
  const { source } = params;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const fetchedArticles = await fetchArticles({ sources: source });
      setArticles(fetchedArticles);
    }

    getArticles();
  }, [source]);

  return (
    <>
      <div>
        <Title title={`${source} Category`} />
        <NewsList initialArticles={articles} source={source} />
      </div>
    </>
  );
}



import { fetchArticles } from '@/services/newsApi';
import Title from '@/components/title';
import NewsList from '@/components/newsList';

export default async function SourcePage({ params }) {

  const { source } = params;
  let articles = [];
  articles = await fetchArticles({ sources: source  });
  

  return (
    <>
      <div>
        <Title
          title={`${source} Category`}
        />
        <NewsList 
          initialArticles={articles}
          source={source}
        />
      </div>
    </>
  );
};



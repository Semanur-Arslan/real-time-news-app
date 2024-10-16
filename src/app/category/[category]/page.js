
import { fetchArticles } from '@/services/newsApi';
import Title from '@/components/title';
import NewsList from '@/components/newsList';
import Categories from '@/components/catagories';

export default async function CategoryPage({ params }) {

  const { category } = params;
  let articles = [];
  articles = await fetchArticles({ category });

  return (
    <>
      <Categories />
      <div>
        <Title
          title={`${category} Category`}
        />
        <NewsList
          initialArticles={articles}
          category={category}
        />
      </div>
    </>
  );
};



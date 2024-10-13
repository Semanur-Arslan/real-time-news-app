
import { fetchArticles } from '@/services/newsApi';
import styles from '@/styles/page.module.css';
import Title from '@/components/title';
import NewsList from '@/components/newsList';
import ErrorMessage from '@/components/errorMessage';

export default async function CategoryPage({ params }) {

  const { category } = params;

  let articles = [];
  let errorMessage = null;

  try {
    articles = await fetchArticles({ category });
  } catch (error) {
    errorMessage = error;
  }

  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <Title
            title={`${formattedCategory} Category`}
          />
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <NewsList initialArticles={articles} category={category} serverError={errorMessage}/>
        </div>
      </main>
    </div>
  );
};



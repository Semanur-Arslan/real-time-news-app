
import { fetchArticles } from '@/services/newsApi';
import NewsCard from '@/components/newsCard';
import styles from '@/styles/page.module.css';
import Title from '@/components/title';
import NewsList from '@/components/newsList';

export default async function CategoryPage({ params }) {

    const { category } = params;
     const articles = await fetchArticles({category});

    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

    return (
        <div className={styles.page}>
            <main className={styles.main}>
            <div>
        <Title
            title={`${formattedCategory} Category`} 
          />
          {/* <div className={styles.gridContainerCategories}>
            {articles.map((article, index) => (
              <NewsCard key={index} news={article} />
            ))}
          </div> */}
          {/* <NewsList category={category} /> */}

          <NewsList initialArticles={articles} category={category}/>
        </div>
            </main>
        </div>
    );
};



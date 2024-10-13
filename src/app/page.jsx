
import styles from "@/styles/page.module.css";
import { fetchArticles } from "@/services/newsApi";
import Catagories from "@/components/catagories";
import NewsCard from "@/components/newsCard";
import { IoIosArrowForward } from "react-icons/io";
import Title from "@/components/title";
import NewsList from "@/components/newsList";

export default async function Home() {

  const articles = await fetchArticles({ country: 'us' });
  // const limitedArticles = articles.slice(0, 6);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Catagories />
        <div>
        <Title
            title="Breaking News" 
            buttonName="Show All" 
            buttonIcon={<IoIosArrowForward />}
          />
          {/* <div className={styles.gridContainer}>
            {articles.map((article, index) => (
              <NewsCard key={index} news={article} />
            ))}
          </div>  */}
          {/* <NewsListServer articles={articles}/> */}
         <NewsList initialArticles={articles} country="us"/>
        </div>

      </main>
    </div>
  );
}

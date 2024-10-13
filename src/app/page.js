
import styles from "@/styles/page.module.css";
import { fetchArticles } from "@/services/newsApi";
import Catagories from "@/components/catagories";
import NewsCard from "@/components/newsCard";
import { IoIosArrowForward } from "react-icons/io";
import Title from "@/components/title";
import NewsList from "@/components/newsList";
import ErrorMessage from "@/components/errorMessage";

export default async function Home() {

  // const articles = await fetchArticles({ country: 'us' });
  // const limitedArticles = articles.slice(0, 6);

  let articles = [];
  let errorMessage = null;

  try {
    articles = await fetchArticles({ category: 'general' });
  } catch (error) {
    errorMessage = error;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Catagories /> */}
        <div>
          <Title
            title="Breaking News"
            buttonName="Show All"
            buttonIcon={<IoIosArrowForward />}
          />
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <NewsList initialArticles={articles} category="general" serverError={errorMessage} />
        </div>

      </main>
    </div>
  );
}

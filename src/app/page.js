import { fetchArticles } from "@/services/newsApi";
import { IoIosArrowForward } from "react-icons/io";
import Title from "@/components/title";
import NewsList from "@/components/newsList";
import PreferencesPromptModal from "@/components/modal";
import Categories from "@/components/catagories";
import { cookies } from "next/headers";
import style from '@/styles/homePage.module.css';

export default async function Home() {
  const cookieStore = cookies();
  const userPreferences = cookieStore.get("userPreferences")?.value; // Çerezden tercihler

  // Eğer userPreferences string olarak kaydedildiyse, JSON.parse ile diziye çevir
  const preferences = userPreferences ? JSON.parse(userPreferences) : { categories: [], sources: [] };
  const { sources } = preferences;

  let articlesBySource = {};
  let generalArticles = [];

  if (sources.length > 0) {
  
    await Promise.all(
      sources.map(async (source) => {
        const articles = await fetchArticles({ sources: source });
        articlesBySource[source] = articles; 
      })
    );
    console.log(articlesBySource)
  } else {

    generalArticles = await fetchArticles({ category: 'general' });
  }

  return (
    <>
      <Categories />
      <div className="container">
        {sources.length > 0 ? (
          Object.entries(articlesBySource).map(([source, articles]) => (
            <div className={style.newsContainerBySource} key={source}>
              <Title title={`${source}`} buttonName="Show All" buttonIcon={<IoIosArrowForward />} />
              <NewsList initialArticles={articles} category={source} />
            </div>
          ))
        ) : (
          <>
            <Title
              title="Breaking News"
              buttonName="Show All"
              buttonIcon={<IoIosArrowForward />}
            />
            <NewsList initialArticles={generalArticles} category="general" />
          </>
        )}
        {sources.length === 0 && <PreferencesPromptModal />}
      </div>
    </>
  );
}

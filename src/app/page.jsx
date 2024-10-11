import Image from "next/image";
import styles from "@/styles/page.module.css";
import { fetchTopHeadlines } from "@/services/newsApi";
import Catagories from "@/components/catagories";

export default async function Home() {
  
  const articles = await fetchTopHeadlines();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Catagories />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Son Haberler</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articles.map((article, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333' }}>
              <h2 style={{ fontSize: '20px', margin: '0 0 10px' }}>{article.title}</h2>
            </a>

            {article.urlToImage && (
              <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                <Image
                  src={article.urlToImage}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            )}

            <p>{article.description}</p>
            <p><small>Kaynak: {article.source.name} | Yazar: {article.author}</small></p>
            <p><small>Yayınlanma Tarihi: {new Date(article.publishedAt).toLocaleDateString()}</small></p>
          </li>
        ))}
      </ul>
    </div>
      </main>
    </div>
  );
}




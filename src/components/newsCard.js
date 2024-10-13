import Image from "next/image";
import styles from '@/styles/newsCard.module.css';
import { format } from 'date-fns';
import defaultImage from '../../public/images/default.png';

export default function NewsCard({ news }) {
    const getShortenedTitle = (title, limit) => {
        const words = title.split(' ');
        return words.length > limit ? words.slice(0, limit).join(' ') + '...' : title;
    };

    return (

        <div className={styles.cardContainer}>
            {news.urlToImage && (
                <div className={styles.cardImg}>
                    <Image
                        src={news.urlToImage && news.urlToImage.startsWith('https')
                            ? news.urlToImage
                            : defaultImage}

                        alt={news.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>
            )}
            <div className={styles.cardContent}>
                <div className={styles.cardTitleContainer}>
                    <p className={styles.publishedDate}>
                        {format(new Date(news.publishedAt), 'dd/MM/yyyy')}
                    </p>
                    <a className={styles.cardUrl} href={news.url} target="_blank" rel="noopener noreferrer">
                        <h5 className={styles.cardTitle} title={news.title}>
                            {getShortenedTitle(news.title, 10)}
                        </h5>
                    </a>
                </div>
                <p className={styles.description}>{news.description}</p>
                <p className={styles.sourceAuthor}>
                    <small>Source: {news.source.name} | Writer: {news.author}</small>
                </p>
            </div>
        </div>
    );
}

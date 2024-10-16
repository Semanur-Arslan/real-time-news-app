'use client';
import { useEffect, useState } from 'react';
import LineChart from '@/components/lineChart';
import styles from '@/styles/chart.module.css';
import Title from '@/components/title';
import { fetchArticles } from "@/services/newsApi";
import { getPreferences } from "@/services/localApi";
import { toast } from 'react-toastify';

export default function ChartPage() {
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const preferences = await getPreferences();
        const hourlyDataArray = [];


        await Promise.all(
          preferences.sources.map(async (source) => {
            const articles = await fetchArticles({ sources: source });

            const hourlyDistribution = new Array(24).fill(0);
            articles.forEach(article => {
              const publishedAt = new Date(article.publishedAt);
              const hour = publishedAt.getHours();
              hourlyDistribution[hour] += 1;
            });

            hourlyDataArray.push({ [source]: hourlyDistribution });
          })
        );

        setHourlyData(hourlyDataArray);

      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();

  }, []);

  return (
    <div>
      <Title title="News Feed Clock Activity" />


      {hourlyData.length === 0 ? (
        <p>To see the News Feed Clock Activity graph, you can choose according to your interests from the preferences tab.</p>
      ) : (
        <div className={styles.chartContainer}>
          <div className={styles.barContainer}>
            <LineChart data={hourlyData} />
          </div>
        </div>
      )}


    </div>
  );
}

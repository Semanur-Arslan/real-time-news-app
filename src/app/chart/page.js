'use client'
import { useEffect, useState } from 'react';
import ActiveHoursChart from '@/components/activeHoursChart';
import styles from '@/styles/chart.module.css';
import Title from '@/components/title';
// import fetchNewsData from '@/lib/fetchNewsData'; 

export default function ActiveHoursPage() {
  const [hourlyData, setHourlyData] = useState(Array(24).fill(0));

  useEffect(() => {
    async function loadData() {
    //   const articles = await fetchNewsData();
    //   const groupedData = groupNewsByHour(articles);
    //   setHourlyData(groupedData);
    }

    loadData();
  }, []);

  return (
    <div>
      <Title 
      title="News Feed Clock Activity"
      />
      <div className={styles.chartContainer}>
      <ActiveHoursChart data={hourlyData} />
      </div>
    </div>
  );
}

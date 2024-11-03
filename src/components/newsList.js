'use client'
// import useFetchArticles from "@/hooks/useFetchArticles";
// import NewsCard from "@/components/newsCard";
// import styles from "@/styles/newList.module.css";
// import { toast } from 'react-toastify';
// import { PushNotifications } from '@capacitor/push-notifications';
// import { useEffect } from "react";
// import { useRouter } from 'next/navigation';

// export default function NewsList({ country, category, source, initialArticles, displayCount }) {

//   const router = useRouter();

//   const { articles, notifications } = useFetchArticles({ country, category, source });
//   const displayArticles = articles && articles.length > 0 ? articles : initialArticles;
//   const articlesToDisplay = displayCount ? displayArticles.slice(0, displayCount) : displayArticles;

//   useEffect(() => {
  
//     if (notifications && notifications.length > 0) {
//       notifications.forEach((notification) => {
//         toast.info(
//           <div className="toastContainer" onClick={() => router.push(`/source/${notification.source.id}`)}>
//             <div>
//               <h5>New News!</h5>
//               <span>{notification.source.name}</span>
//             </div>
           
//           </div>
//         );
//       });
//     }
//   }, [notifications]);

//   return (
//     <>
//       <div className={styles.gridContainer}>
//         {Array.isArray(articlesToDisplay) && articlesToDisplay.map((article, index) => (
//           <NewsCard key={index} news={article} />
//         ))}
//       </div>

//     </>

//   );
// }



import { useEffect } from "react";
import { toast } from 'react-toastify';
import { PushNotifications } from '@capacitor/push-notifications';
import { useRouter } from 'next/navigation';
 import useFetchArticles from "@/hooks/useFetchArticles";
import NewsCard from "@/components/newsCard";
import styles from "@/styles/newList.module.css";
import { Capacitor } from '@capacitor/core';


export default function NewsList({ country, category, source, initialArticles, displayCount }) {
  const router = useRouter();
  const { articles, notifications } = useFetchArticles({ country, category, source });
  const displayArticles = articles && articles.length > 0 ? articles : initialArticles;
  const articlesToDisplay = displayCount ? displayArticles.slice(0, displayCount) : displayArticles;

useEffect(() => {
  if (Capacitor.getPlatform() === 'android' || Capacitor.getPlatform() === 'ios') {
    const requestPushPermission = async () => {
      const permission = await PushNotifications.requestPermissions();
      if (permission.receive === 'granted') {
        await PushNotifications.register();
      }
    };

    requestPushPermission();

    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      toast.info(
        <div className="toastContainer" onClick={() => router.push(`/source/${notification.source.id}`)}>
          <div>
            <h5>New News!</h5>
            <span>{notification.source.name}</span>
          </div>
        </div>
      );
    });
  }
}, [notifications]);


  useEffect(() => {

    if (notifications && notifications.length > 0) {
      notifications.forEach((notification) => {

        toast.info(
          <div className="toastContainer" onClick={() => router.push(`/source/${notification.source.id}`)}>
            <div>
              <h5>New News!</h5>
              <span>{notification.source.name}</span>
            </div>
          </div>
        );

        PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
          router.push(`/source/${notification.notification.data.sourceId}`);
        });
      });
    }
  }, [notifications]);

  return (
    <div className={styles.gridContainer}>
      {Array.isArray(articlesToDisplay) && articlesToDisplay.map((article, index) => (
        <NewsCard key={index} news={article} />
      ))}
    </div>
  );
}






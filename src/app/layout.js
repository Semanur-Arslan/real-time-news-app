import "@/styles/globals.css";
import Header from "@/components/header";
import styles from '@/styles/page.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "NBC News",
  description: "Live Breaking News",
  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <Header />
        <div className={styles.page}>
          <main className={styles.main}>
              {children}
          </main>
        </div>
      </body>
    </html>
  );
}

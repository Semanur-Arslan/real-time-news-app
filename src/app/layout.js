import "@/styles/globals.css";
import Header from "@/components/header";
import Categories from "@/components/catagories";
import styles from '@/styles/page.module.css';

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
        <Header />
        {/* <Categories /> */}
        <div className={styles.page}>
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

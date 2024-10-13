import "@/styles/globals.css";
import Header from "@/components/header";
import Categories from "@/components/catagories";

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
        <Categories />
        {children}
      </body>
    </html>
  );
}

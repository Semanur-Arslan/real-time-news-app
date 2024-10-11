import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/header";


export const metadata = {
  title: "News",
  description: "Live Breaking News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/favicon.ico" /> 
        <title>{metadata.title}</title>
      </Head>
      <body>
      <Header />
        {children}
      </body>
    </html>
  );
}

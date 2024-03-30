import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // seo - dynamic ah html haed-> meta data la add agidum - so each page kum description and content iruku.
  //so ithu seo- friendly ah irukum -  for google/bing search engine
  title: "IMDB Clone",
  description: "This is a Movie Database Clone ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

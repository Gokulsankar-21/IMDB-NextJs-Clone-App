import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";

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
      <body className={inter.className}>
        {/* Theme  */}
        <Providers>
          {/* Header */}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
/**
 * inga intha layout la common ah irukura section irukum
 *  header
 *  footer
 *
 * so ithu component ah use pannama
 * entha layout venuma athukula nama home/about content ah children set panni
 * complete html body elements ah antha root element ah return pannum
 * athu app -> "/" page.jsx la irukum - ipa nama kita header+footer with home page content ellama page.jsx la irukum athu res ah anupuvom - react payload ah anupuvom
 *
 * intha time pakkava avara kavika poren - avaroda styles and workflow
 * theme vida maten
 */
/**
 *
 * RootLayout ku children ah home page and about page content ah kudukrom
 * athu children
 * and root layout la common ah header iruku athukum  sethu than na theme provide panannaum
 *
 * other way to say
 * nama body/app  ah cover pannanum
 *
 */
/**
 *
 * @layout_response
 * ena reqvanthalum next js layout la irunthu than res ah anuputhu
 * page,jsx la ila
 *
 * @creating_a_page_in_nextjs - kathukiten
 *
 *
 * @sahand_workflow
 * design pannumbothu - mobile first development - then small and above size
 * 
 *
 */

import Head from "next/head";
import Nav from "../nav/nav";
import styles from "./layout.module.css";
import { useRouter } from "next/router";
import MenuButton from "../mobileViewMenuButton/mobileViewMenuButton";

const name = "Jon Hill";
export const siteTitle = "The News Desk";

export default function Layout({ href, children }) {
  const { menuButtonContainer } = styles;
  const router = useRouter();
  let pageTitle = "Headlines";
  if (router.asPath !== "/") {
    let route = router.asPath.replace(router.asPath.charAt(0), "");
    pageTitle = route.charAt(0).toUpperCase() + route.slice(1);
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/news.svg"></link>
        <meta
          name="description"
          content="Student project to display API and next.js skills"
        />
        <title>
          {siteTitle} - {pageTitle}
        </title>
        <meta property="og:title" content={siteTitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <Nav />
      <div className={menuButtonContainer}>
        <MenuButton />
      </div>
      <h1 className={styles.pageTitle}>{pageTitle}</h1>
      <div className={styles.container}>{children}</div>
    </>
  );
}

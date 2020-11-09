import Head from "next/head";
import Nav from "../nav/nav";
import styles from "./layout.module.css";

const name = "Jon Hill";
export const siteTitle = "Jons APIary";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="Student project to display API and next.js skills"
        />
        <title>{siteTitle}</title>
        <meta property="og:title" content={siteTitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <Nav />
      <div className={styles.container}>{children}</div>
    </>
  );
}

// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// <meta charset="utf-8" />
// <meta name="description" content={site.siteMetadata.description} />
// {location && <meta property="og:url" content={location.href} />}
// <meta property="og:image" content={image || '/logo.svg'} />
// <meta property="og:title" content={title} key="ogtitle" />
// <meta
//   property="og:site_name"
//   content={site.siteMetadata.title}
//   key="ogsitename"
// />
// <meta
//   property="og:description"
//   content={description}
//   key="ogdescription"
// />

// <meta
//           property="og:image"
//           content={`https://og-image.now.sh/${encodeURI(
//           siteTitle
//           )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
//           />
//           <meta name="twitter:card" content="summary_large_image" />

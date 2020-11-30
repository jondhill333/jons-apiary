import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/layout";
import NewsDisplay from "../components/newsDisplay/newsDisplay";
import NewsSearch from "../components/newsSelector/newsSearch";

export async function getServerSideProps(context) {
  const apiKey = process.env.NEWS_API_KEY;
  const GApiKey = process.env.GUARDIAN_NEWS_API_KEY;
  const NytApiKey = process.env.NYT_NEWS_API_KEY;

  const [
    newsNewsUsa,
    newsNewsUk,
    guardianNewsUsa,
    guardianNewsUk,
    nytNews,
  ] = await Promise.all([
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((r) => r.json())
      .then((res) => res.articles),
    fetch(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${apiKey}`)
      .then((r) => r.json())
      .then((res) => res.articles),
    fetch(`http://content.guardianapis.com/us-news?&api-key=${GApiKey}`)
      .then((r) => r.json())
      .then((res) => res.response.results),
    fetch(`http://content.guardianapis.com/uk-news?&api-key=${GApiKey}`)
      .then((r) => r.json())
      .then((res) => res.response.results),
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("world")&api-key=${NytApiKey}`
    )
      .then((r) => r.json())
      .then((res) => res.response.docs),
  ]);

  return {
    props: {
      newsNewsUsa,
      newsNewsUk,
      guardianNewsUsa,
      guardianNewsUk,
      nytNews,
    },
  };
}

export default function HeedlinesPage({
  newsNewsUsa,
  newsNewsUk,
  guardianNewsUsa,
  guardianNewsUk,
  nytNews,
}) {
  const tempStore = [...newsNewsUsa, ...newsNewsUk];
  tempStore
    .map((article) => {
      if (
        article.source.name === "The New York Times" ||
        article.source.name === "The Guardian" ||
        article.source.name === "guardian.com"
      ) {
        tempStore.splice(tempStore.indexOf(article), 1);
      }
    })
    .sort(() => {
      return 0.5 - Math.random();
    });

  const newsApiStore = tempStore.slice(0, 20);

  const gAndNytStore = [...guardianNewsUsa, ...guardianNewsUk, ...nytNews]
    .sort(() => {
      return 0.5 - Math.random();
    })
    .slice(0, 20);

  const articles = [...newsApiStore, ...gAndNytStore].flat();
  console.log(articles);

  return (
    <>
      <Layout>
        <h1>Headlines</h1>
        {/* <NewsSearch /> */}
        <NewsDisplay articles={articles} />
      </Layout>
    </>
  );
}

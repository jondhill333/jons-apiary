import Link from "next/link";
import Layout from "../components/layout/layout";
import NewsDisplay from "../components/newsDisplay/newsDisplay";

export default function HealthPage({ newsNews, guardianNews, nytNews }) {
  const articles = [...newsNews, ...guardianNews, ...nytNews].flat();

  return (
    <>
      <Layout>
        <h1>Health</h1>
        <NewsDisplay articles={articles} />
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const apiKey = process.env.NEWS_API_KEY;
  const GApiKey = process.env.GUARDIAN_NEWS_API_KEY;
  const NytApiKey = process.env.NYT_NEWS_API_KEY;

  const [newsNews, guardianNews, nytNews] = await Promise.all([
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`
    )
      .then((r) => r.json())
      .then((res) => res.articles),
    fetch(
      `http://content.guardianapis.com/lifeandstyle/health-and-wellbeing?&api-key=${GApiKey}`
    )
      .then((r) => r.json())
      .then((res) => res.response.results),

    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("health")&api-key=${NytApiKey}`
    )
      .then((r) => r.json())
      .then((res) => res.response.docs),
  ]);

  return {
    props: {
      newsNews,
      guardianNews,
      nytNews,
    },
  };
}

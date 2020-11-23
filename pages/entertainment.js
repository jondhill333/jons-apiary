import Link from "next/link";
import Layout from "../components/layout/layout";
import NewsDisplay from "../components/newsDisplay/newsDisplay";

export async function getServerSideProps(context) {
  const apiKey = process.env.NEWS_API_KEY;
  const GApiKey = process.env.GUARDIAN_NEWS_API_KEY;
  const NytApiKey = process.env.NYT_NEWS_API_KEY;

  const [newsNews, guardianNews, nytNews] = await Promise.all([
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${apiKey}`
    )
      .then((r) => r.json())
      .then((res) => res.articles),
    fetch(`http://content.guardianapis.com/culture?&api-key=${GApiKey}`)
      .then((r) => r.json())
      .then((res) => res.response.results),

    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("culture")&api-key=${NytApiKey}`
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

export default function EntertainmentPage({ newsNews, guardianNews, nytNews }) {
  const allNews = [];
  allNews.push(newsNews);
  allNews.push(guardianNews);
  allNews.push(nytNews);
  const articles = allNews.flat();

  return (
    <>
      <Layout>
        <h1>Entertainment News</h1>
        <NewsDisplay articles={articles} />
      </Layout>
    </>
  );
}

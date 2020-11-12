import Layout from "../components/layout/layout";
import NewsDisplay from "../components/newsDisplay/newsDisplay";
import NewsSelector from "../components/newsSelector/newsSelector";

export async function getServerSideProps(context) {
  let queryString = "covid";
  let categoryTitle = "technology";
  const apiKey = process.env.NEWS_API_KEY;
  const GApiKey = process.env.GUARDIAN_NEWS_API_KEY;
  const NytApiKey = process.env.NYT_NEWS_API_KEY;

  const [
    newsNews,
    guardianNews,
    nytNews,
    newsNewsHeadlines,
    guardianSections,
    nytNewsDesks,
  ] = await Promise.all([
    fetch(`https://newsapi.org/v2/everything?q=${queryString}&apiKey=${apiKey}`)
      .then((r) => r.json())
      .then((res) => res.articles),
    fetch(
      `https://content.guardianapis.com/search?q=${queryString}&api-key=${GApiKey}`
    )
      .then((r) => r.json())
      .then((res) => res.response.results),
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${queryString}&api-key=${NytApiKey}`
    )
      .then((r) => r.json())
      .then((res) => res.response.docs),
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${categoryTitle}&apiKey=${apiKey}`
    )
      .then((r) => r.json())
      .then((res) => res.articles),
    fetch(`http://content.guardianapis.com/${categoryTitle}?api-key=${GApiKey}`)
      .then((r) => r.json())
      .then((res) => res.response.results),
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:(%22${categoryTitle}%22)&api-key=${NytApiKey}`
    )
      .then((r) => r.json())
      .then((res) => res.response.docs),
  ]);

  return {
    props: {
      newsNews,
      guardianNews,
      nytNews,
      newsNewsHeadlines,
      guardianSections,
      nytNewsDesks,
    },
  };
}

export default function newsPage({
  newsNews,
  guardianNews,
  nytNews,
  newsNewsHeadlines,
  guardianSections,
  nytNewsDesks,
}) {
  return (
    <>
      <Layout>
        <NewsSelector />
        <NewsDisplay
          newsNews={newsNews}
          guardianNews={guardianNews}
          nytNews={nytNews}
          newsNewsHeadlines={newsNewsHeadlines}
          guardianSections={guardianSections}
          nytNewsDesks={nytNewsDesks}
        />
      </Layout>
    </>
  );
}

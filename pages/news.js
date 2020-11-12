import Layout from "../components/layout/layout";
import NewsDisplay from "../components/newsDisplay/newsDisplay";

export async function getServerSideProps(context) {
  let queryString = "covid";
  const apiKey = process.env.NEWS_API_KEY;
  const GApiKey = process.env.GUARDIAN_NEWS_API_KEY;
  const NytApiKey = process.env.NYT_NEWS_API_KEY;

  const [newsNews, guardianNews, nytNews] = await Promise.all([
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
      // .then((res) => console.log(res)),
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

export default function newsPage({ newsNews, guardianNews, nytNews }) {
  return (
    <>
      <Layout>
        <NewsDisplay
          newsNews={newsNews}
          guardianNews={guardianNews}
          nytNews={nytNews}
        />
      </Layout>
    </>
  );
}

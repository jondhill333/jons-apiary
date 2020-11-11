import Layout from "../components/layout/layout";
import NewsDisplay from "../components/newsDisplay/newsDisplay";

newsPage.getInitialProps = async function (context) {
  let queryString = "covid";
  const apiKey = process.env.NEWS_API_KEY;
  const GApiKey = process.env.GUARDIAN_NEWS_API_KEY;

  const [newsNews, guardianNews] = await Promise.all([
    fetch(`https://newsapi.org/v2/everything?q=${queryString}&apiKey=${apiKey}`)
      .then((r) => r.json())
      .then((res) => res.articles),
    fetch(
      `https://content.guardianapis.com/search?q=${queryString}&api-key=${GApiKey}`
    )
      .then((r) => r.json())
      .then((res) => res.response.results),
  ]);

  return { newsNews, guardianNews };
};

export default function newsPage({ newsNews, guardianNews }) {
  return (
    <>
      <Layout>
        <NewsDisplay newsNews={newsNews} guardianNews={guardianNews} />
      </Layout>
    </>
  );
}

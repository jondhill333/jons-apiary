import styles from "./newsDisplay.module.css";

function SingleArticle({ newsNews, guardianNews, nytNews }) {
  const { container } = styles;
  let sortedNews = [...newsNews, ...guardianNews, ...nytNews].sort(function () {
    return 0.5 - Math.random();
  });
  return (
    <>
      {sortedNews.map((article) => (
        <div
          key={
            article.publishedAt
              ? article.publishedAt
              : article.webPublicationDate
              ? article.webPublicationDate
              : article.pub_date
          }
        >
          <div>
            {article.title
              ? article.title
              : article.webTitle
              ? article.webTitle
              : article.headline.main}
          </div>
          <div>
            {article.source === "The New York Times"
              ? "The New York Times"
              : article.source
              ? article.source.name
              : "Guardian"}
          </div>
          <a
            target="_blank"
            href={
              article.url
                ? article.url
                : article.webUrl
                ? article.webUrl
                : article.web_url
            }
          >
            Read full story here
          </a>
        </div>
      ))}
    </>
  );
}

export default function NewsDisplay({ newsNews, guardianNews, nytNews }) {
  console.log(nytNews);
  const { container } = styles;
  return (
    <>
      <div className={container}>
        <SingleArticle
          newsNews={newsNews}
          guardianNews={guardianNews}
          nytNews={nytNews}
        />
      </div>
    </>
  );
}

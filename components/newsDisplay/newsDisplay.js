import styles from "./newsDisplay.module.css";

function SingleArticle({ newsNews, guardianNews }) {
  const { container } = styles;
  let sortedNews = [...newsNews, ...guardianNews];
  return (
    <>
      {sortedNews.map((article) => (
        <div
          key={
            article.publishedAt
              ? article.publishedAt
              : article.webPublicationDate
          }
        >
          <div>{article.title ? article.title : article.webTitle}</div>
          <div>{article.source ? article.source.name : "Guardian"}</div>
          <a href={article.url ? article.url : article.webUrl}>
            Read full story here
          </a>
        </div>
      ))}
    </>
  );
}

export default function NewsDisplay({ newsNews, guardianNews }) {
  const { container } = styles;
  return (
    <>
      <div className={container}>
        <SingleArticle newsNews={newsNews} guardianNews={guardianNews} />
      </div>
    </>
  );
}

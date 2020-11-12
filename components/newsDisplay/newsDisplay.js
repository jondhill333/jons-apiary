import styles from "./newsDisplay.module.css";
import { v4 as uuidv4 } from "uuid";

function SingleArticle({
  newsNews,
  guardianNews,
  nytNews,
  newsNewsHeadlines,
  guardianSections,
  nytNewsDesks,
}) {
  const { container } = styles;
  let sortedNews = [];
  let test = 1;
  if (test === 1) {
    sortedNews = [...newsNews, ...guardianNews, ...nytNews].sort(function () {
      return 0.5 - Math.random();
    });
  } else {
    sortedNews = [
      ...newsNewsHeadlines,
      ...guardianSections,
      ...nytNewsDesks,
    ].sort(function () {
      return 0.5 - Math.random();
    });
  }

  return (
    <>
      {sortedNews.map((article) => (
        <div key={uuidv4()}>
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

export default function NewsDisplay({
  newsNews,
  guardianNews,
  nytNews,
  newsNewsHeadlines,
  guardianSections,
  nytNewsDesks,
}) {
  const { container } = styles;
  return (
    <>
      <div className={container}>
        <SingleArticle
          newsNews={newsNews}
          guardianNews={guardianNews}
          nytNews={nytNews}
          newsNewsHeadlines={newsNewsHeadlines}
          guardianSections={guardianSections}
          nytNewsDesks={nytNewsDesks}
        />
      </div>
    </>
  );
}

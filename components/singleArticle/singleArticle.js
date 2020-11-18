import styles from "./singleArticle.module.css";
import { v4 as uuidv4 } from "uuid";

export default function SingleArticle({ data }) {
  const { articleContainer, articleTitle, articleItem, source, link } = styles;

  function cleanUpTitle() {
    let cleanedTitle = "";
    if (data.title) {
      data.title.split("-");
    }
  }
  return (
    <>
      {data &&
        data.map((article) => (
          <div key={uuidv4()} className={articleContainer}>
            <div className={articleTitle}>
              {article.title
                ? article.title.split("-")[0].substr(0, 100)
                : article.webTitle
                ? article.webTitle.split(" - ")[0].substr(0, 100)
                : article.headline.main.split("-")[0].substr(0, 100)}
            </div>
            <div className={`${articleItem} ${source}`}>
              {article.source === "The New York Times"
                ? "The New York Times"
                : article.source
                ? article.source.name
                : article.source === "Theguardian.comtechnology"
                ? "The Guardian"
                : "The Guardian"}
            </div>
            <div className={`${articleItem} ${link}`}>
              {article.urlToImage && (
                <div>
                  <img src={article.urlToImage} />
                </div>
              )}

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
          </div>
        ))}
    </>
  );
}

import styles from "./singleArticle.module.css";
import { v4 as uuidv4 } from "uuid";

export default function SingleArticle({ data }) {
  const {
    container,
    articleContainer,
    articleTitle,
    articleItem,
    source,
    link,
  } = styles;

  // if the data contains an identifier to be a specific source
  // render a specifc type of div

  // news API STORIES CAN be of type one, two, 3 and four

  // guardian and NTY can only be type 5

  // the order is one, two , three, 5, 5, three, 4, 5, 5, 5,

  return (
    <>
      <div className={container}>
        {data &&
          data.map((article) => (
            <div key={uuidv4()} className={articleContainer}>
              <div className={articleTitle}>
                {article.title
                  ? article.title.split(" - ")[0].substr(0, 100)
                  : article.webTitle
                  ? article.webTitle.split(" - ")[0].substr(0, 100)
                  : article.headline.main.split(" - ")[0].substr(0, 100)}
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
              {article.urlToImage && (
                <div>
                  <img src={article.urlToImage} />
                </div>
              )}
              <div className={`${articleItem} ${link}`}>
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
      </div>
    </>
  );
}

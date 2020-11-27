import styles from "./singleArticle.module.css";
import { v4 as uuidv4 } from "uuid";

export default function SingleArticle({ data }) {
  const {
    containerTypeOne,
    containerTypeTwo,
    articleContainer,
    articleImage,
    articleTitle,
    source,
    link,
  } = styles;

  return (
    <>
      <div className={containerTypeOne}>
        {newsStoreOne &&
          newsStoreOne.map((article) => (
            <div key={uuidv4()} className={articleContainer}>
              <div className={articleImage}>
                <img src={article.urlToImage} />
              </div>

              <div className={articleTitle}>
                {article.title.split(" - ")[0].substr(0, 100)}
              </div>
              <div className={source}>{article.source.name}</div>
              <div className={link}>
                <a target="_blank" href={article.url}>
                  Read full story here
                </a>
              </div>
            </div>
          ))}
      </div>
      <div className={containerTypeTwo}>
        {gAndNytStoreOne &&
          gAndNytStoreOne.map((article) => (
            <div key={uuidv4()} className={articleContainer}>
              <div className={articleTitle}>
                {article.webTitle
                  ? article.webTitle.split(" - ")[0].substr(0, 100)
                  : article.headline
                  ? article.headline.main.split(" - ")[0].substr(0, 100)
                  : ""}
              </div>
              <div className={source}>
                {article.source === "The New York Times"
                  ? "The New York Times"
                  : "The Guardian"}
              </div>
              <div className={link}>
                <a
                  target="_blank"
                  href={
                    article.url
                      ? article.url
                      : article.web_url
                      ? article.web_url
                      : ""
                  }
                >
                  Read full story here
                </a>
              </div>
            </div>
          ))}
      </div>
      <div className={containerTypeOne}>
        {newsStoreTwo &&
          newsStoreTwo.map((article) => (
            <div key={uuidv4()} className={articleContainer}>
              <div className={articleImage}>
                <img src={article.urlToImage} />
              </div>

              <div className={articleTitle}>
                {article.title.split(" - ")[0].substr(0, 100)}
              </div>
              <div className={source}>{article.source.name}</div>
              <div className={link}>
                <a target="_blank" href={article.url}>
                  Read full story here
                </a>
              </div>
            </div>
          ))}
      </div>
      <div className={containerTypeTwo}>
        {gAndNytStoreTwo &&
          gAndNytStoreTwo.map((article) => (
            <div key={uuidv4()} className={articleContainer}>
              <div className={articleTitle}>
                {article.webTitle
                  ? article.webTitle.split(" - ")[0].substr(0, 100)
                  : article.headline
                  ? article.headline.main.split(" - ")[0].substr(0, 100)
                  : ""}
              </div>
              <div className={source}>
                {article.source === "The New York Times"
                  ? "The New York Times"
                  : "The Guardian"}
              </div>
              <div className={link}>
                <a
                  target="_blank"
                  href={
                    article.url
                      ? article.url
                      : article.web_url
                      ? article.web_url
                      : ""
                  }
                >
                  Read full story here
                </a>
              </div>
            </div>
          ))}
      </div>
      <div className={containerTypeOne}>
        {newsStoreThree &&
          newsStoreThree.map((article) => (
            <div key={uuidv4()} className={articleContainer}>
              <div className={articleImage}>
                <img src={article.urlToImage} />
              </div>

              <div className={articleTitle}>
                {article.title.split(" - ")[0].substr(0, 100)}
              </div>
              <div className={source}>{article.source.name}</div>
              <div className={link}>
                <a target="_blank" href={article.url}>
                  Read full story here
                </a>
              </div>
            </div>
          ))}
      </div>
      <div className={containerTypeTwo}>
        {gAndNytStorethree &&
          gAndNytStorethree.map((article) => (
            <div key={uuidv4()} className={articleContainer}>
              <div className={articleTitle}>
                {article.webTitle
                  ? article.webTitle.split(" - ")[0].substr(0, 100)
                  : article.headline
                  ? article.headline.main.split(" - ")[0].substr(0, 100)
                  : ""}
              </div>
              <div className={source}>
                {article.source === "The New York Times"
                  ? "The New York Times"
                  : "The Guardian"}
              </div>
              <div className={link}>
                <a
                  target="_blank"
                  href={
                    article.url
                      ? article.url
                      : article.web_url
                      ? article.web_url
                      : ""
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

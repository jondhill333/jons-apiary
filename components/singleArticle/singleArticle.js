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

  let newsStoreOne;
  let newsStoreTwo;
  let newsStoreThree;
  let gAndNytStoreMain;
  let gAndNytStoreOne;
  let gAndNytStoreTwo;
  let gAndNytStorethree;

  if (data) {
    newsStoreOne = data.slice(0, 5);
    newsStoreTwo = data.slice(5, 10);
    newsStoreThree = data.slice(10, 15);

    gAndNytStoreMain = data.slice(20).sort(() => {
      return 0.5 - Math.random();
    });

    gAndNytStoreOne = gAndNytStoreMain.slice(0, 4);
    gAndNytStoreTwo = gAndNytStoreMain.slice(4, 8);
    gAndNytStorethree = gAndNytStoreMain.slice(8);
  }
  console.log(data);

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
    </>
  );
}

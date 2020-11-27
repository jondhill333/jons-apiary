import { v4 as uuidv4 } from "uuid";
import styles from "./gAndNytArticles.module.css";

export default function GAndNytArticles({ data }) {
  const {
    container,
    articleWrapper,
    articleContainer,
    articleTitle,
    source,
    link,
  } = styles;

  return (
    <>
      <div className={container}>
        {data &&
          data.map((article) => (
            <div className={articleWrapper}>
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
            </div>
          ))}
      </div>
    </>
  );
}

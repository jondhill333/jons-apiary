import { v4 as uuidv4 } from "uuid";
import styles from "./gAndNytArticles.module.css";

export default function GAndNytArticles({ data }) {
  const {
    grid,
    wrapper,
    container,
    sourceAndTitle,
    title,
    source,
    link,
  } = styles;

  return (
    <>
      <div className={grid}>
        {data &&
          data.map((article) => (
            <div className={wrapper}>
              <div key={uuidv4()} className={container}>
                <div className={sourceAndTitle}>
                  <span className={source}>
                    {article.source === "The New York Times"
                      ? "The New York Times"
                      : "The Guardian"}{" "}
                    /{" "}
                  </span>
                  <span className={title}>
                    {article.webTitle
                      ? article.webTitle.split(" - ")[0].substr(0, 100)
                      : article.headline
                      ? article.headline.main.split(" - ")[0].substr(0, 95)
                      : ""}
                  </span>
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

import styles from "./articleDisplayTypeThreeVercelFix.module.css";
import { v4 as uuidv4 } from "uuid";

export default function ArticleDisplayTypeThree({ newsArticle }) {
  const article = newsArticle[0];
  const {
    wrapper,
    container,
    image,
    sourceAndTitle,
    title,
    source,
    link,
  } = styles;

  return (
    <div className={wrapper}>
      <div key={uuidv4()} className={container}>
        {article && (
          <>
            <div className={image}>
              <img src={article.urlToImage} />
            </div>
            <div className={sourceAndTitle}>
              <span className={source}>{article.source.name} / </span>
              <span className={title}>
                {article.title.split(" - ")[0].substr(0, 100)}
              </span>
            </div>

            <div className={link}>
              <a target="_blank" href={article.url}>
                Read the full story here
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

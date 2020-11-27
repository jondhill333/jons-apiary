import styles from "./articleDisplayTypeFive.module.css";
import { v4 as uuidv4 } from "uuid";

export default function ArticleDisplaytypeFive({ newsArticle }) {
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
            Read full story here
          </a>
        </div>
      </div>
    </div>
  );
}

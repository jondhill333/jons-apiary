import styles from "./newsApiArticles.module.css";
import { v4 as uuidv4 } from "uuid";
import ArticleDisplaytypeOne from "../articleDisplayTypeOne/articleDisplaytypeOne";
import ArticleDisplaytypeTwo from "../articleDisplayTypeTwo/articleDisplaytypeTwo";
import ArticleDisplaytypeThree from "../articleDisplayTypeThree/articleDisplaytypeThree";
import ArticleDisplaytypeFour from "../articleDisplayTypeFour/articleDisplaytypeFour";
import ArticleDisplaytypeFive from "../articleDisplaytypeFive/articleDisplaytypeFive";

export default function NewsApiArticles({ data }) {
  const { grid } = styles;

  let articleOne = data.splice(0, 1);
  let articleTwo = data.splice(1, 1);
  let articleThree = data.splice(2, 1);
  let articleFour = data.splice(1, 1);
  let articleFive = data.splice(0, 1);

  return (
    <>
      <div className={grid}>
        <ArticleDisplaytypeOne newsArticle={articleOne} />
        <ArticleDisplaytypeTwo newsArticle={articleTwo} />
        <ArticleDisplaytypeThree newsArticle={articleThree} />
        <ArticleDisplaytypeFour newsArticle={articleFour} />
        <ArticleDisplaytypeFive newsArticle={articleFive} />
      </div>
    </>
  );
}

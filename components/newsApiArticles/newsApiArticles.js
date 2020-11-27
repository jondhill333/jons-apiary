import styles from "./newsApiArticles.module.css";
import { v4 as uuidv4 } from "uuid";
import ArticleDisplaytypeOne from "../articleDisplayTypeOne/articleDisplaytypeOne";

export default function NewsApiArticles({ data }) {
  const {
    grid,
    // container,
    // articleWrapper,
    // articleContainer,
    // articleImage,
    // articleTitle,
    // source,
    // link,
  } = styles;

  let articleOne = data.splice(0, 1);
  let articleTwo = data.splice(1, 1);
  let articleThree = data.splice(2, 1);
  let articleFour = data.splice(3, 1);
  let articleFive = data.splice(4, 1);

  return (
    <>
      <div className={grid}>
        <ArticleDisplaytypeOne newsArticle={articleOne} />
        {/* <ArticleDisplayTypeTwo article={articleTwo}/>
    <ArticleDisplayTypeThree article={articleThree}/>
    <ArticleDisplayTypeFour article={articleFour}/>
    <ArticleDisplayTypeFive article={articleFive}/> */}
      </div>
    </>
  );
}

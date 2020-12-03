import Link from "next/link";
import styles from "./newsApiArticles.module.css";
import ArticleDisplayTypeOne from "../articleDisplayTypeOne/articleDisplayTypeOne";
import ArticleDisplayTypeTwo from "../articleDisplayTypeTwo/articleDisplaytTypeTwo";
import ArticleDisplayTypeThree from "../articleDisplayTypeThree/articleDisplayTypeThree";
import ArticleDisplayTypeFour from "../articleDisplayTypeFour/articleDisplayTypeFour";
import ArticleDisplayTypeFive from "../articleDisplayTypeFive/articleDisplayTypeFive";

export default function NewsApiArticles({ data }) {
  const { display } = styles;

  let articleOne = data.splice(0, 1);
  let articleTwo = data.splice(1, 1);
  let articleThree = data.splice(2, 1);
  let articleFour = data.splice(1, 1);
  let articleFive = data.splice(0, 1);

  return (
    <>
      <div className={display}>
        <ArticleDisplayTypeOne newsArticle={articleOne} />
        <ArticleDisplayTypeTwo newsArticle={articleTwo} />
        <ArticleDisplayTypeThree newsArticle={articleThree} />
        <ArticleDisplayTypeFour newsArticle={articleFour} />
        <ArticleDisplayTypeFive newsArticle={articleFive} />
      </div>
    </>
  );
}

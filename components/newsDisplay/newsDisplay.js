import styles from "./newsDisplay.module.css";
import SingleArticle from "../singleArticle/singleArticle";

export default function NewsDisplay({ articles }) {
  // console.log(articles);
  // const { container } = styles;
  return (
    <>
      {/* <div className={container}> */}
      <SingleArticle data={articles} />
      {/* </div> */}
    </>
  );
}

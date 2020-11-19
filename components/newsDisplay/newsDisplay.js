import styles from "./newsDisplay.module.css";
import SingleArticle from "../singleArticle/singleArticle";

export default function NewsDisplay({ data }) {
  // const { container } = styles;
  return (
    <>
      {/* <div className={container}> */}
      <SingleArticle data={data} />
      {/* </div> */}
    </>
  );
}

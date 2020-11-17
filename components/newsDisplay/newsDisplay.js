import styles from "./newsDisplay.module.css";
import { v4 as uuidv4 } from "uuid";

function SingleArticle({ data }) {
  const { container } = styles;
  return (
    <>
      {data &&
        data.map((article) => (
          <div key={uuidv4()}>
            <div>
              {article.title
                ? article.title
                : article.webTitle
                ? article.webTitle
                : article.headline.main}
            </div>
            <div>
              {article.source === "The New York Times"
                ? "The New York Times"
                : article.source
                ? article.source.name
                : "Guardian"}
            </div>
            <a
              target="_blank"
              href={
                article.url
                  ? article.url
                  : article.webUrl
                  ? article.webUrl
                  : article.web_url
              }
            >
              Read full story here
            </a>
          </div>
        ))}
    </>
  );
}

export default function NewsDisplay({ data }) {
  const { container } = styles;
  return (
    <>
      <div className={container}>
        <SingleArticle data={data} />
      </div>
    </>
  );
}

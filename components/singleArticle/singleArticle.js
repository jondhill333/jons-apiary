import styles from "./singleArticle.module.css";
import { v4 as uuidv4 } from "uuid";

export default function SingleArticle({ data }) {
  const {
    containerTypeOne,
    containerTypeTwo,
    articleContainer,
    articleImage,
    articleTitle,
    articleItem,
    source,
    link,
  } = styles;

  let newsStoreOne = data.slice(0, 4);
  let newsStoreTwo = data.slice(5, 9);
  let newsStoreThree = data.slice(10, 14);

  let gAndNytStoreMain = data.slice(15).sort(() => {
    return 0.5 - Math.random();
  });

  const gAndNytStoreOne = gAndNytStoreMain.slice(0, 3);
  const gAndNytStoreTwo = gAndNytStoreMain.slice(4, 7);
  const gAndNytStorethree = gAndNytStoreMain.slice(8, 11);

  // console.log(newsStoreOne);
  return (
    <>
      <div className={containerTypeOne}>
        {newsStoreOne &&
          newsStoreOne.map((article) => (
            <div key={uuidv4()} className={articleContainer}>
              <div className={articleImage}>
                <img src={article.urlToImage}></img>
              </div>

              <div className={articleTitle}>
                {article.title.split(" - ")[0].substr(0, 100)}
              </div>
              <div className={`${articleItem} ${source}`}>{article.source}</div>
              <div className={`${articleItem} ${link}`}>
                <a target="_blank" href={article.url}>
                  Read full story here
                </a>
              </div>
            </div>
          ))}
      </div>
      <div className={containerTypeTwo}>
        {gAndNytStoreOne &&
          gAndNytStoreOne.map((article) => (
            <div key={uuidv4()} className={articleContainer}>
              <div className={articleTitle}>
                {article.webTitle
                  ? article.webTitle.split(" - ")[0].substr(0, 100)
                  : article.headline.main.split(" - ")[0].substr(0, 100)}
              </div>
              <div className={`${articleItem} ${source}`}>
                {article.source === "The New York Times"
                  ? "The New York Times"
                  : "The Guardian"}
              </div>
              <div className={`${articleItem} ${link}`}>
                <a
                  target="_blank"
                  href={article.url ? article.url : article.web_url}
                >
                  Read full story here
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

//     {data &&
//       data.map((article) => (
//         // {
//         //   article.title ? console.count(article) : "nope";
//         // }

//         <div key={uuidv4()} className={articleContainer}>
//           <div className={articleTitle}>
//             {article.title
//               ? article.title.split(" - ")[0].substr(0, 100)
//               : article.webTitle
//               ? article.webTitle.split(" - ")[0].substr(0, 100)
//               : article.headline.main
//               ? article.headline.main.split(" - ")[0].substr(0, 100)
//               : ""}
//           </div>
//           <div className={`${articleItem} ${source}`}>
//             {article.source === "The New York Times"
//               ? "The New York Times"
//               : article.source
//               ? article.source.name
//               : article.source === "Theguardian.comtechnology"
//               ? "The Guardian"
//               : "The Guardian"}
//           </div>
//           {article.urlToImage && (
//             <div>
//               <img src={article.urlToImage} />
//             </div>
//           )}
//           <div className={`${articleItem} ${link}`}>
//             <a
//               target="_blank"
//               href={
//                 article.url
//                   ? article.url
//                   : article.webUrl
//                   ? article.webUrl
//                   : article.web_url
//               }
//             >
//               Read full story here
//             </a>
//           </div>
//         </div>
//       ))}

// </>

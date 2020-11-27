import NewsApiArticles from "../newsApiArticles/newsApiArticles";
import GAndNytArticles from "../gAndNytArticles/gAndNytArticles";

export default function NewsDisplay({ articles }) {
  let newsStoreOne;
  let newsStoreTwo;
  let newsStoreThree;
  let gAndNytStoreMain;
  let gAndNytStoreOne;
  let gAndNytStoreTwo;
  let gAndNytStorethree;

  if (articles) {
    newsStoreOne = articles.slice(0, 5);
    newsStoreTwo = articles.slice(5, 10);
    newsStoreThree = articles.slice(10, 15);

    gAndNytStoreMain = articles.slice(20, 40).sort(() => {
      return 0.5 - Math.random();
    });

    gAndNytStoreOne = gAndNytStoreMain.slice(0, 4);
    gAndNytStoreTwo = gAndNytStoreMain.slice(4, 8);
    gAndNytStorethree = gAndNytStoreMain.slice(8, 12);
  }

  return (
    <>
      <NewsApiArticles data={newsStoreOne} />

      {/* <GAndNytArticles data={gAndNytStoreOne} />

      <NewsApiArticles data={newsStoreTwo} />

      <GAndNytArticles data={gAndNytStoreTwo} />

      <NewsApiArticles data={newsStoreThree} />

      <GAndNytArticles data={gAndNytStorethree} /> */}
    </>
  );
}

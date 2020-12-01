import NewsApiArticles from "../newsApiArticles/newsApiArticles";
import GAndNytArticles from "../gAndNytArticles/gAndNytArticles";

export default function NewsDisplay({ articles }) {
  let newsStoreOne;
  let newsStoreTwo;
  let newsStoreThree;
  let newsStoreFour;
  let gAndNytStoreMain;
  let gAndNytStoreOne;
  let gAndNytStoreTwo;
  let gAndNytStorethree;
  let gAndNytStoreFour;

  if (articles) {
    newsStoreOne = articles.slice(0, 5);
    newsStoreTwo = articles.slice(5, 10);
    newsStoreThree = articles.slice(10, 15);
    newsStoreFour = articles.slice(15, 20);

    gAndNytStoreMain = articles.slice(20, 39).sort(() => {
      return 0.5 - Math.random();
    });

    gAndNytStoreOne = gAndNytStoreMain.slice(0, 4);
    gAndNytStoreTwo = gAndNytStoreMain.slice(4, 8);
    gAndNytStorethree = gAndNytStoreMain.slice(8, 12);
    gAndNytStoreFour = gAndNytStoreMain.slice(12, 16);
  }

  return (
    <>
      <NewsApiArticles data={newsStoreOne} />
      <GAndNytArticles data={gAndNytStoreOne} />
      <NewsApiArticles data={newsStoreTwo} />
      <GAndNytArticles data={gAndNytStoreTwo} />
      <NewsApiArticles data={newsStoreThree} />
      <GAndNytArticles data={gAndNytStorethree} />
      <NewsApiArticles data={newsStoreFour} />
      <GAndNytArticles data={gAndNytStoreFour} />
    </>
  );
}

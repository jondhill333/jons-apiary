import NewsApiArticles from "../newsApiArticles/newsApiArticles";
import GAndNytArticles from "../gAndNytArticles/gAndNytArticles";
import { useEffect } from "react";

export default function NewsDisplay({ gAndNytArticles, newsApiArticles }) {
  let newsStoreOne;
  let newsStoreTwo;
  let newsStoreThree;
  let newsStoreFour;
  let gAndNytStoreOne;
  let gAndNytStoreTwo;
  let gAndNytStorethree;
  let gAndNytStoreFour;

  if (gAndNytArticles) {
    gAndNytStoreOne = gAndNytArticles.slice(0, 4);
    gAndNytStoreTwo = gAndNytArticles.slice(4, 8);
    gAndNytStorethree = gAndNytArticles.slice(8, 12);
    gAndNytStoreFour = gAndNytArticles.slice(12, 16);
  }
  if (newsApiArticles) {
    newsStoreOne = newsApiArticles.slice(0, 5);
    newsStoreTwo = newsApiArticles.slice(5, 10);
    newsStoreThree = newsApiArticles.slice(10, 15);
    newsStoreFour = newsApiArticles.slice(15, 20);
  }

  return (
    <>
      <NewsApiArticles data={newsStoreOne} />
      <GAndNytArticles data={gAndNytStoreOne} />
      <NewsApiArticles data={newsStoreTwo} />
      <GAndNytArticles data={gAndNytStoreTwo} />
      <NewsApiArticles data={newsStoreThree} />
      <GAndNytArticles data={gAndNytStorethree} />
      {newsApiArticles.length > 14 && <NewsApiArticles data={newsStoreFour} />}
      <GAndNytArticles data={gAndNytStoreFour} />
    </>
  );
}

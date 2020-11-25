import styles from "./newsSearch.module.css";
import { useState } from "react";

export default function NewsSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const { searchBarContainer, searchbar, form, submitButtonContainer } = styles;

  function handleSearchTermChange(e) {
    let searchValueHolder = e.target.value;
    setSearchTerm(searchValueHolder);
  }

  async function handleSubmit(e) {
    const apiKey = process.env.NEWS_API_KEY;
    const GApiKey = process.env.GUARDIAN_NEWS_API_KEY;
    const NytApiKey = process.env.NYT_NEWS_API_KEY;

    e.preventDefault();

    await Promise.all([
      fetch(
        `https://newsapi.org/v2/everything?q=${searchTerm}&language=en&apiKey=${apiKey}`
      ),
      fetch(
        `https://content.guardianapis.com/search?q=${searchTerm}&api-key=${GApiKey}`
      ),
      fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${NytApiKey}`
      ),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map((response) => {
            return response.json();
          })
        );
      })
      .then((data) => {
        const store = [];
        data.map((newsArticle) => {
          if (newsArticle.articles) {
            store.push(newsArticle.articles);
          } else if (newsArticle.response.results) {
            store.push(newsArticle.response.results);
          } else if (newsArticle.response.docs) {
            store.push(newsArticle.response.docs);
          }
        });
        const finalArray = store.flat();
        setData(finalArray);
      });
  }

  return (
    <>
      <form className={form} onSubmit={handleSubmit}>
        <div className={searchBarContainer}>
          <label className={searchbar} htmlFor="searchTerm">
            Search for a news article
          </label>
          <br />
          <input
            placeholder="type a word"
            type="text"
            id="searchTerm"
            name="fnasearchTermme"
            onClick={handleSearchTermChange}
            onChange={handleSearchTermChange}
          />
        </div>
        <div className={submitButtonContainer}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}

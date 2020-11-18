import styles from "./newsSelector.module.css";
import NewsDisplay from "../newsDisplay/newsDisplay";
import { useState } from "react";

export default function NewsSelector() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");
  const [option, setOption] = useState("");
  const [data, setData] = useState([]);

  const {
    newsSelectorContainer,
    label,
    radioButtonContainer,
    radioButton,
    searchBarContainer,
    searchbar,
    form,
    submitButtonContainer,
    unselected,
  } = styles;

  function handleCategoryTitleChange(e) {
    let categoryHolder = e.target.value;
    setCategoryTitle(categoryHolder);
    setOption(1);
  }

  function handleSearchTermChange(e) {
    let searchValueHolder = e.target.value;
    setSearchTerm(searchValueHolder);
    setOption(2);
  }

  async function handleSubmit(e) {
    const apiKey = process.env.NEWS_API_KEY;
    const GApiKey = process.env.GUARDIAN_NEWS_API_KEY;
    const NytApiKey = process.env.NYT_NEWS_API_KEY;

    e.preventDefault();

    if (option === 1) {
      await Promise.all([
        fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${categoryTitle}&apiKey=${apiKey}`
        ),
        fetch(
          `http://content.guardianapis.com/${categoryTitle}?api-key=${GApiKey}`
        ),
        fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:(%22${categoryTitle}%22)&api-key=${NytApiKey}`
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
          const finalArray = store.flat().sort(() => {
            return 0.5 - Math.random();
          });
          setData(finalArray);
        });
    } else {
      await Promise.all([
        fetch(
          `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`
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
          const finalArray = store.flat().sort(() => {
            return 0.5 - Math.random();
          });
          setData(finalArray);
        });
    }
  }

  return (
    <>
      <form className={form} onSubmit={handleSubmit}>
        <div className={newsSelectorContainer}>
          <div
            className={`radioButtonContainer ${
              option === 1 || !option ? "" : unselected
            }`}
            onChange={handleCategoryTitleChange}
          >
            <div className={radioButton}>
              <input
                type="radio"
                id="technology"
                name="category"
                value="technology"
              />
              <label className={label} htmlFor="technology">
                {" "}
                Technology
              </label>
            </div>
            <div className={radioButton}>
              <input
                type="radio"
                id="business"
                name="category"
                value="business"
              />
              <label className={label} htmlFor="business">
                {" "}
                Business
              </label>
            </div>
            <div className={radioButton}>
              <input
                type="radio"
                id="science"
                name="category"
                value="science"
              />
              <label className={label} htmlFor="science">
                {" "}
                Science
              </label>
            </div>
            <div className={radioButton}>
              <input type="radio" id="sports" name="category" value="sports" />
              <label className={label} htmlFor="sports">
                {" "}
                Sports
              </label>
            </div>
            <div className={radioButton}>
              <input
                type="radio"
                id="entertainment"
                name="category"
                value="entertainment"
              />
              <label className={label} htmlFor="entertainment">
                {" "}
                Entertainment
              </label>
            </div>
            <div className={radioButton}>
              <input type="radio" id="health" name="category" value="health" />
              <label className={label} htmlFor="health">
                {" "}
                Health
              </label>
            </div>
          </div>

          <div
            className={`searchBarContainer ${
              option === 2 || !option ? "" : unselected
            }`}
          >
            <label className={searchbar} htmlFor="searchTerm">
              Or type something to look up
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
        </div>
      </form>

      <NewsDisplay data={data} />
    </>
  );
}

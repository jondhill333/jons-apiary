import styles from "./newsSelector.module.css";

export default function NewsSelector() {
  const { container, label, searchbar } = styles;
  return (
    <>
      <div className={container}>
        <form action="/">
          <input
            type="checkbox"
            id="technology"
            name="technology"
            value="technology"
          />
          <label className={label} for="technology">
            Technology
          </label>
          <input
            type="checkbox"
            id="business"
            name="business"
            value="business"
          />
          <label className={label} for="business">
            {" "}
            business
          </label>
          <input type="checkbox" id="science" name="science" value="science" />
          <label className={label} for="science">
            science
          </label>
          <label className={searchbar} for="searchTerm">
            Or type something to look up
          </label>
          <input
            placeholder="type a word"
            type="text"
            id="fname"
            name="fname"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

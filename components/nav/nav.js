import styles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  const {
    navWrapper,
    navContentContainer,
    appTitle,
    news,
    aggegator,
    appDescription,
    categoryPagesContainer,
  } = styles;
  return (
    <>
      <div className={navWrapper}>
        <div className={navContentContainer}>
          <div className={appTitle}>
            News <br />
            Agregator
          </div>
          <div className={appDescription}>
            All the top stories from the best news outlets
          </div>
          <div className={categoryPagesContainer}>
            <div>
              <Link href="/">
                <a>Headlines</a>
              </Link>
            </div>
            <div>
              <Link href="/technology">
                <a>Technology</a>
              </Link>
            </div>
            <div>
              <Link href="/science">
                <a>Science</a>
              </Link>
            </div>
            <div>
              <Link href="/culture">
                <a>Culture</a>
              </Link>
            </div>
            <div>
              <Link href="/business">
                <a>Business</a>
              </Link>
            </div>
            <div>
              <Link href="/sport">
                <a>Sport</a>
              </Link>
            </div>
            <div>
              <Link href="/health">
                <a>Health</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

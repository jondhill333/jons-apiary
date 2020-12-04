import styles from "./nav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const {
    navWrapper,
    navContentContainer,
    appTitle,
    appDescription,
    categoryPagesContainer,
    active,
  } = styles;

  const router = useRouter();

  return (
    <>
      <div className={navWrapper}>
        <div className={navContentContainer}>
          <div className={appTitle}>The News Desk</div>
          <div className={appDescription}>
            All the top stories from
            <br /> the best news outlets
          </div>
          <div className={categoryPagesContainer}>
            <div>
              <Link href="/">
                <a className={`${router.pathname == "/" ? active : ""}`}>
                  Headlines
                </a>
              </Link>
            </div>
            <div>
              <Link href="/technology">
                <a
                  className={`${
                    router.pathname == "/technology" ? active : ""
                  }`}
                >
                  Technology
                </a>
              </Link>
            </div>
            <div>
              <Link href="/science">
                <a className={`${router.pathname == "/science" ? active : ""}`}>
                  Science
                </a>
              </Link>
            </div>
            <div>
              <Link href="/culture">
                <a className={`${router.pathname == "/culture" ? active : ""}`}>
                  Culture
                </a>
              </Link>
            </div>
            <div>
              <Link href="/business">
                <a
                  className={`${router.pathname == "/business" ? active : ""}`}
                >
                  Business
                </a>
              </Link>
            </div>
            <div>
              <Link href="/sport">
                <a className={`${router.pathname == "/sport" ? active : ""}`}>
                  Sport
                </a>
              </Link>
            </div>
            <div>
              <Link href="/health">
                <a className={`${router.pathname == "/Health" ? active : ""}`}>
                  Health
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

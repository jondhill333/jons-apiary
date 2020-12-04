import React from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "./mobileViewMenuButton.module.css";
import { useRouter } from "next/router";

export default function MenuButton() {
  const [display, setDisplay] = useState(false);
  const {
    mobileMenuNav,
    hidden,
    link,
    active,
    button,
    openMenuIcon,
    line,
    lineOne,
    lineTwo,
    lineThree,
    menuCloseIcon,
    closeIcon,
  } = styles;

  const router = useRouter();

  function toggleMenu() {
    setDisplay(!display);
  }
  return (
    <>
      <div className={`${display ? mobileMenuNav : hidden}`}>
        <div className={link}>
          <Link href="/">
            <a className={`${router.pathname == "/" ? active : ""}`}>
              Headlines
            </a>
          </Link>
        </div>
        <div className={link}>
          <Link href="/technology">
            <a className={`${router.pathname == "/technology" ? active : ""}`}>
              Technology
            </a>
          </Link>
        </div>
        <div className={link}>
          <Link href="/science">
            <a className={`${router.pathname == "/science" ? active : ""}`}>
              Science
            </a>
          </Link>
        </div>
        <div className={link}>
          <Link href="/culture">
            <a className={`${router.pathname == "/culture" ? active : ""}`}>
              Culture
            </a>
          </Link>
        </div>
        <div className={link}>
          <Link href="/business">
            <a className={`${router.pathname == "/business" ? active : ""}`}>
              Business
            </a>
          </Link>
        </div>
        <div className={link}>
          <Link href="/sport">
            <a className={`${router.pathname == "/sport" ? active : ""}`}>
              Sport
            </a>
          </Link>
        </div>
        <div className={link}>
          <Link href="/health">
            <a className={`${router.pathname == "/health" ? active : ""}`}>
              Health
            </a>
          </Link>
        </div>
        <div className={link}></div>
      </div>

      <div className={button} onClick={toggleMenu}>
        {!display ? (
          <div className={openMenuIcon}>
            <div className={`${line} ${lineOne}`}></div>
            <div className={`${line} ${lineTwo}`}></div>
            <div className={`${line} ${lineThree}`}></div>
          </div>
        ) : (
          <div className={menuCloseIcon}>
            <div className={closeIcon}>
              <img src="/cancel.png"></img>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

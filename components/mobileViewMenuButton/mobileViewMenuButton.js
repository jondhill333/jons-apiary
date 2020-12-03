import React from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "./mobileViewMenuButton.module.css";

export default function MenuButton() {
  const [display, setDisplay] = useState(false);
  const {
    mobileMenuNav,
    link,
    button,
    openMenuIcon,
    line,
    lineOne,
    lineTwo,
    lineThree,
    menuCloseIcon,
    closeIcon,
  } = styles;

  function toggleMenu() {
    setDisplay(!display);
  }
  return (
    <>
      {display && (
        <div className={mobileMenuNav}>
          <div className={link}>
            <Link href="/">
              <a>Headlines</a>
            </Link>
          </div>
          <div className={link}>
            <Link href="/technology">
              <a>Technology</a>
            </Link>
          </div>
          <div className={link}>
            <Link href="/science">
              <a>Science</a>
            </Link>
          </div>
          <div className={link}>
            <Link href="/culture">
              <a>Culture</a>
            </Link>
          </div>
          <div className={link}>
            <Link href="/business">
              <a>Business</a>
            </Link>
          </div>
          <div className={link}>
            <Link href="/sport">
              <a>Sport</a>
            </Link>
          </div>
          <div className={link}>
            <Link href="/health">
              <a>Health</a>
            </Link>
          </div>
          <div className={link}></div>
        </div>
      )}

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

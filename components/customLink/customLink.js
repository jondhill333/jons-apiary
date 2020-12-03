import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./customLink.module.css";

export default function CustomLink({ href, children }) {
  const { link, selected } = styles;
  const router = useRouter();
  console.log(href);
  console.log(children.props);
  console.log(router);

  let className = children.props.className || "";
  if (router.pathname === href) {
  }

  return (
    <Link
      href={href}
      // className={link}
    ></Link>
  );
}

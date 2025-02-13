import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link to="/articles" className={styles.menu}>
        Realworld Blog
      </Link>
      <div className={styles.autorzationsContainer}>
        <a className={styles.link}>Sign In</a>
        <a className={styles.link}>Sign Up</a>
      </div>
    </div>
  );
}

export default Header;

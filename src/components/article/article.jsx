import React from "react";
import styles from "./article.module.scss";
import { format } from "date-fns";

function Article({ article }) {
  const startDate = new Date(article.createdAt);
  const formattedStartTime = format(startDate, "MMMM dd, yyyy");

  function shortedText(text, maxLength) {
    if (article.title.length > maxLength) {
      return text.slice(0, maxLength);
    }
    return text;
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{shortedText(article.title, 20)}</h1>
          <span className={styles.likes}>♡ {article.favoritesCount}</span>
        </div>
        <div className={styles.author}>
          <div className={styles.authorInfo}>
            <span className={styles.authorName}>{article.author.username}</span>
            <span className={styles.date}>{formattedStartTime}</span>
          </div>
          <img
            className={styles.avatar}
            src={article.author.image}
            alt="user-avatar"
          />
        </div>
      </header>

      <div className={styles.tagsContainer}>
        {shortedText(article.tagList, 5).map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.description}>{article.description}</div>
    </article>
  );
}

export default Article;

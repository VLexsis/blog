import React from "react";
import ReactMarkdown from "react-markdown";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
import { useParams } from "react-router-dom";
import { useGetArticleBySlugQuery } from "../../api/api";
import { format } from "date-fns";

import styles from "./articlePage.module.scss";

function ArticlePage() {
  const { slug } = useParams();
  const { data, isLoading, isError } = useGetArticleBySlugQuery(slug);

  if (isLoading) {
    return (
      <div className={styles.load}>
        <Flex align="center" gap="middle">
          <div> Loading...</div>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </Flex>
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const startDate = new Date(data.article.createdAt);
  const formattedStartTime = format(startDate, "MMMM dd, yyyy");

  return (
    <div className={styles.articleList}>
      <article className={styles.container}>
        <header className={styles.header}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{data.article.title}</h1>
            <span className={styles.likes}>
              ♡ {data.article.favoritesCount}
            </span>
          </div>
          <div className={styles.author}>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>
                {data.article.author.username}
              </span>
              <span className={styles.date}>{formattedStartTime}</span>
            </div>
            <img
              className={styles.avatar}
              src={data.article.author.image}
              alt="user-avatar"
            />
          </div>
        </header>

        <div className={styles.tagsContainer}>
          {data.article.tagList.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.description}>{data.article.description}</div>

        <ReactMarkdown className={styles.articleBody}>
          {data.article.body}
        </ReactMarkdown>
      </article>
    </div>
  );
}

export default ArticlePage;

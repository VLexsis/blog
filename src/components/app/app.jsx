import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticlesList from "../articles-list/articles-list";
import ArticlePage from "../../pages/articlePages/articlePage";
import Header from "../header/header";

import styles from "./app.module.scss";

const App = () => {
  return (
    <Router>
      <div className={styles.body}>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

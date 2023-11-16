import DisplayMarkup from "@components/UI/DisplayMarkup";
import UserCard from "@features/user/components/UserCard";
import React from "react";
import styles from "./ArticleItem.module.css";
import { IArticle } from "src/interfaces/IArticle";
import LikeAndComment from "@components/LikeAndComment";

const ArticleItem: React.FC<{ article: IArticle }> = ({ article }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={styles.postcard}>
      <UserCard user={article.user} />
      <b className={styles.postName}>{article.title}</b>
      <DisplayMarkup markup={article.body} expanded={expanded} />
      <span
        style={{ color: "blue" }}
        className={styles.readMore}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? "Read less..." : "Read more..."}
      </span>
      <LikeAndComment commentsCount={article.comments?.length || 0} />
    </div>
  );
};

export default ArticleItem;

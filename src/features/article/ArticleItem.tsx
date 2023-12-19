import DisplayMarkup from "@components/UI/DisplayMarkup";
import UserCard from "@features/user/components/UserCard";
import React from "react";
import styles from "./ArticleItem.module.css";
import { IArticle } from "src/interfaces/IArticle";
import LikeAndComment from "@components/LikeAndComment";
import { useSelector } from "react-redux";
import getAxiosInstance from "src/api/interceptors";
import { useNavigate } from "react-router-dom";

const ArticleItem: React.FC<{ article: IArticle }> = ({ article }) => {
  const [expanded, setExpanded] = React.useState(false);
  const userData = useSelector((state: any) => state.user.userData);

  const navigate = useNavigate();

  const handleRemoveArticle = async () => {
    try {
      const sure = window.confirm("Are you sure to delete this article?");
      if (!sure) return;
      const response = await getAxiosInstance(
        import.meta.env.VITE_APP_API_URL
      ).delete(`/articles/${article.id}`);

      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveArticleAsAdmin = async () => {
    const sure = window.confirm("Are you sure to delete this article?");
    if (!sure) return;

    const reason = prompt("Enter reason to delete this article");

    const response = await getAxiosInstance(
      import.meta.env.VITE_APP_API_URL
    ).delete(`/admin-panel/article/${article.id}`, {
      data: { reason: reason || undefined },
    });

    if (response.status === 200) {
      window.location.reload();
    }
  };

  const handleEditArticle = async () => {
    navigate(`/edit-article/${article.id}`);
  };

  return (
    <div className={styles.postcard}>
      {!!userData && userData.role === "admin" && (
        <button
          onClick={handleRemoveArticleAsAdmin}
          className={styles.removeButton}
        >
          ❌
        </button>
      )}
      {article.user!.id === userData?.id && userData.role !== "admin" && (
        <button onClick={handleRemoveArticle} className={styles.removeButton}>
          ❌
        </button>
      )}

      {article.user!.id === userData?.id && userData.role !== "admin" && (
        <button onClick={handleEditArticle} className={styles.editButton}>
          ✏️
        </button>
      )}

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
      <LikeAndComment
        commentsCount={article.comments?.length || 0}
        defaultLikesCount={0}
        liked={false}
        postId={article.id}
      />
    </div>
  );
};

export default ArticleItem;

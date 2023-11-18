import { FunctionComponent, useState } from "react";
import styles from "./LikeAndComment.module.css";
import getAxiosInstance from "src/api/interceptors";

const LikeAndComment: FunctionComponent<{
  commentsCount: number;
  liked?: boolean;
  postId: string;
  defaultLikesCount: number;
  setShowComments?: any;
}> = ({
  commentsCount,
  liked = false,
  postId,
  defaultLikesCount,
  setShowComments,
}) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [likesCount, setLikesCount] = useState(defaultLikesCount);

  const handleLike = async () => {
    const responce = await getAxiosInstance(
      import.meta.env.VITE_APP_API_URL
    ).post(`posts/${postId}/like`);

    if (responce.status === 201) {
      setIsLiked((prev) => !prev);

      if (responce.data.liked === true) {
        setLikesCount((prev) => prev + 1);
      } else {
        setLikesCount((prev) => prev - 1);
      }
    }
  };

  return (
    <div className={styles.likeandcomment}>
      <button className={styles.like} onClick={handleLike}>
        <img
          className={styles.vectorIcon1}
          alt=""
          src={isLiked ? "like_icon_filled.svg" : "like_icon.svg"}
        />
        {/*TODO: add likes counter here */}
        <span className={styles.text1}>{likesCount}</span>
      </button>
      <button
        className={styles.comment}
        onClick={() => setShowComments((show) => !show)}
      >
        <img className={styles.vectorIcon} alt="" src="comment_icon.svg" />
        <span className={styles.text}>{commentsCount}</span>
      </button>
    </div>
  );
};

export default LikeAndComment;

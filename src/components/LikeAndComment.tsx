import { FunctionComponent } from "react";
import styles from "./LikeAndComment.module.css";

const LikeAndComment: FunctionComponent = () => {
  return (
    <div className={styles.likeandcomment}>
      <button className={styles.comment}>
        <img className={styles.vectorIcon} alt="" src="comment_icon.svg" />
        <span className={styles.text}>319</span>
      </button>
      <button className={styles.like}>
        <img className={styles.vectorIcon1} alt="" src="like_icon.svg" />
        <span className={styles.text1}>22K</span>
      </button>
    </div>
  );
};

export default LikeAndComment;

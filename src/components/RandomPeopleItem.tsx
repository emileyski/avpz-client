import { FunctionComponent } from "react";
import styles from "./RandomPeopleItem.module.css";
import { IUserSimplified } from "src/interfaces/IUserSimplified";

const People1: FunctionComponent<{ user: IUserSimplified }> = ({ user }) => {
  return (
    <div className={styles.people}>
      <div className={styles.line} />
      <div className={styles.card}>{user.name}</div>
      <div className={styles.image}>
        <img
          className={styles.imageIcon}
          alt=""
          src={
            user.picture ||
            "https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
          }
        />
      </div>
      <b className={styles.posts}>posts {user.postscount}</b>
    </div>
  );
};

export default People1;

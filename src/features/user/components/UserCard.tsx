import React from "react";
import styles from "./UserCard.module.css";
import { IUserSimplified } from "src/interfaces/IUserSimplified";

const UserCard: React.FC<{ user: IUserSimplified | undefined }> = ({
  user,
}) => {
  return (
    <div className={styles.username}>
      <img
        className={styles.icon}
        alt=""
        src={
          user?.picture ||
          "https://avatars.githubusercontent.com/u/96009930?v=3"
        }
      />
      <div className={styles.ownerName}>{user?.nickname || user?.name}</div>
    </div>
  );
};

export default UserCard;

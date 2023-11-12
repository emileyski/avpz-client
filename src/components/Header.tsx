import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <button className={styles.logIn}>
        <div className={styles.logIn1}>Log In</div>
      </button>
      <input
        className={styles.search}
        placeholder="Search SkillHub"
        type="text"
      />
    </div>
  );
};

export default Header;

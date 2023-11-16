import { FunctionComponent } from "react";
import styles from "./Filters.module.css";

const Filters: FunctionComponent = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.navigation}>
        <img src="home_icon.svg" alt="home" />
        <span>Home</span>
      </div>
      <div className={styles.navigation}>
        <img src="popular_icon.svg" alt="popular" />
        <span>Popular</span>
      </div>

      <div className={styles.topics}>
        <span>Topics</span>
        <img src="expander_icon.svg" alt="" />
      </div>
      <div className={styles.topics}>
        <span>Resources</span>
        <img src="expander_icon.svg" alt="" />
      </div>
    </div>
  );
};

export default Filters;

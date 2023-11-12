import { FunctionComponent } from "react";
import styles from "./Home.module.css";
import Filters from "@components/Filters";
import RandomPeoples from "@components/RandomPeoples";
import PostItem from "@features/post/PostItem";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles.filters}>
        <Filters />
      </div>
      <div className={styles.posts}>
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
      <div className={styles.randomPeopleScreen}>
        <RandomPeoples />
      </div>
    </div>
  );
};

export default Home;

import { FunctionComponent } from "react";
import styles from "./RandomPeoples.module.css";
import RandomPeopleItem from "./RandomPeopleItem";

const RandomPeoples: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <b className={styles.randomPeopleSpeakContainer}>
        <span className={styles.randomPeopleSpeakContainer1}>
          <p className={styles.randomPeople}>Random People!</p>
          <p className={styles.speakWithRandom}>
            Speak with random people we recomends
          </p>
        </span>
      </b>
      <RandomPeopleItem />
      <RandomPeopleItem />
      <RandomPeopleItem />
    </div>
  );
};

export default RandomPeoples;

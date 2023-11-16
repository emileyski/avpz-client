import { FunctionComponent } from "react";
import styles from "./RandomPeoples.module.css";
import RandomPeopleItem from "./RandomPeopleItem";
import { IUserSimplified } from "src/interfaces/IUserSimplified";

const RandomPeoples: FunctionComponent<{ users: IUserSimplified[] }> = ({
  users,
}) => {
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
      {users.map((user) => (
        <RandomPeopleItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default RandomPeoples;

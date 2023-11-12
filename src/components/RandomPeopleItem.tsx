import { FunctionComponent } from "react";
import styles from "./RandomPeopleItem.module.css";

const People1: FunctionComponent = () => {
  return (
    <div className={styles.people}>
      <div className={styles.line} />
      <div className={styles.card}>Benjamin</div>
      <div className={styles.image}>
        <img
          className={styles.imageIcon}
          alt=""
          src="https://s3-alpha-sig.figma.com/img/995a/d60d/e2788d9d5eacaaa22dce453874205142?Expires=1700438400&Signature=GbifCU6EcfRh5a4O5XfkeHnwtdkljQ18vAJQDfA~Bzw6fF~b6lud3L-ZlSnKk8z1j387BbWcUerXjYCygazyvqwA15MHPm0VYX8DnYQ3-HKyt4Qs9G3mtDwcbqe0IA0o759CdZLJlZkn02eEat3mAWpIYLHsRdDKP6vSbYONJJoFx4LR4LzmVC-p37lLdBra3Sm0XaHXtY8KhgPT4Yd7jXtrL0QjHP3jp3AKbDmgDlV3UPkSrMKi0xqYz2PgJiQCmituNXIddMdW9aDGYpOgfSgio3fKmkHmN3kPui2VdhL05dNAre3iZw0sbn08j~PRtQ9Wqeoyx2b~qIGwXIjphA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </div>
      <b className={styles.posts}>posts 70</b>
    </div>
  );
};

export default People1;

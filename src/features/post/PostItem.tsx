import { FunctionComponent } from "react";
import styles from "./PostItem.module.css";
import ExpandableText from "@components/ExpandableText";
import LikeAndComment from "@components/LikeAndComment";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const PostItem: FunctionComponent = () => {
  return (
    <div className={styles.postcard}>
      <div className={styles.username}>
        <img
          className={styles.icon}
          alt=""
          src="https://avatars.githubusercontent.com/u/96009930?v=3"
        />
        <div className={styles.ownerName}>Hakuru</div>
      </div>
      <b className={styles.postName}>
        The importance of being there for your children
      </b>

      <Carousel
        className={styles.postImages}
        autoPlay={true}
        showThumbs={false}
      >
        <img src="https://picsum.photos/500/200" />
        <img src="https://picsum.photos/500/200" />
        <img src="https://picsum.photos/500/200" />
        <img src="https://picsum.photos/500/200" />
        <img src="https://picsum.photos/500/200" />
      </Carousel>

      <div className={styles.text}>
        <ExpandableText
          maxLength={200}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad...
        continue in full Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad... continue in full Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad... continue in full Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad... continue in full Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad... continue in full Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad... continue in
        full"
        />
      </div>
      <LikeAndComment />
    </div>
  );
};

export default PostItem;

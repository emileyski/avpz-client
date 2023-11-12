import { FunctionComponent } from "react";
import styles from "./PostItem.module.css";
import ExpandableText from "@components/ExpandableText";
import LikeAndComment from "@components/LikeAndComment";
import ImagePagination from "react-image-pagination";

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

      <div className={styles.postImages}>
        <ImagePagination
          pages={[
            {
              src: "https://s3-alpha-sig.figma.com/img/a5ec/f587/8b5ed0c149f964818537ef820570f1b1?Expires=1700438400&Signature=avFuSL5z~S3vIZaFfCV8YBpwQYe8jMelJ189xaG~cklk9Y4KazsJlnZhb0NulOQtBFXZUXe8ItjqMC6g3hVUNFYNcqy4dWX2RoBpQv46Q3949QH-UwnA3hhc8NV2o1t7~JqUtrcWs3VNHrAEEmD1dhzDoXdzHGZvK39vh4GSloJ6sYNo3FGKwgir5t~30Ia8xKdmkmiEoryKE9XDPbPl7MEE64wQFFaJ0P7GABU7VKrFSIOMR8uiwPypGoZjGdnI7PUWC8x6tFDOkOA9Sy-pht4mWs-1dDxeVsSFGQdP-R9oRSq6sGcsS6NuZmcEwE0mtCpCIlhObg1OfWJeGPU3LQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            },
            {
              src: "https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg",
            },
          ]}
        />
      </div>

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

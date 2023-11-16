import { FunctionComponent } from "react";
import styles from "./PostItem.module.css";
import ExpandableText from "@components/ExpandableText";
import LikeAndComment from "@components/LikeAndComment";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IPost } from "src/interfaces/IPost";
import UserCard from "@features/user/components/UserCard";

const PostItem: FunctionComponent<{ post: IPost }> = ({ post }) => {
  return (
    <div className={styles.postcard}>
      <UserCard user={post.user} />
      <b className={styles.postName}>{post.title}</b>

      <Carousel
        className={styles.postImages}
        autoPlay={true}
        showThumbs={false}
      >
        {post.pictures.map((picture) => (
          <img src={picture} key={picture} />
        ))}
      </Carousel>

      <div className={styles.text}>
        <ExpandableText maxLength={200} text={post.body} />
      </div>
      <LikeAndComment
        commentsCount={post.comments?.length || 0}
        defaultLikesCount={post.likeCount || 0}
        liked={post.isLiked}
        postId={post.id}
      />
    </div>
  );
};

export default PostItem;

import { FunctionComponent, useState } from "react";
import styles from "./PostItem.module.css";
import ExpandableText from "@components/ExpandableText";
import LikeAndComment from "@components/LikeAndComment";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IPost } from "src/interfaces/IPost";
import UserCard from "@features/user/components/UserCard";
import CommentsContainer from "@features/comments/CommentsContainer";
import { useSelector } from "react-redux";
import getAxiosInstance from "src/api/interceptors";
import { useNavigate } from "react-router-dom";

const PostItem: FunctionComponent<{ post: IPost }> = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((state: any) => state.user.userData);

  const handleRemovePost = async () => {
    try {
      const sure = window.confirm("Are you sure to delete this post?");
      if (!sure) return;
      const response = await getAxiosInstance(
        import.meta.env.VITE_APP_API_URL
      ).delete(`/posts/${post.id}`);

      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemovePostAsAdmin = async () => {
    const sure = window.confirm("Are you sure to delete this post?");
    if (!sure) return;

    const reason = prompt("Enter reason to delete this post");

    const response = await getAxiosInstance(
      import.meta.env.VITE_APP_API_URL
    ).delete(`/admin-panel/post/${post.id}`, {
      data: { reason: reason || undefined },
    });

    if (response.status === 200) {
      window.location.reload();
    }
  };

  const handleEditPost = async () => {
    navigate(`/edit-post/${post.id}`);
  };

  return (
    <div className={styles.postcard}>
      {!!userData && userData.role === "admin" && (
        <button
          onClick={handleRemovePostAsAdmin}
          className={styles.removeButton}
        >
          ❌
        </button>
      )}
      {post.user!.id === userData?.id && userData.role !== "admin" && (
        <button onClick={handleRemovePost} className={styles.removeButton}>
          ❌
        </button>
      )}
      {post.user!.id === userData?.id && userData.role !== "admin" && (
        <button onClick={handleEditPost} className={styles.editButton}>
          ✏️
        </button>
      )}
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
        commentsCount={post.commentCount || 0}
        defaultLikesCount={post.likeCount || 0}
        liked={post.isLiked}
        postId={post.id}
        setShowComments={setShowComments}
      />

      {showComments && <CommentsContainer postId={post.id} />}
    </div>
  );
};

export default PostItem;

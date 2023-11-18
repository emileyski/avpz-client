import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./Comment.module.css";
import LikeAndComment from "@components/LikeAndComment";
import { IComment } from "src/interfaces/IComment";
import { useSelector } from "react-redux";
import getAxiosInstance from "src/api/interceptors";

const Comment: React.FC<{ defaultComment: IComment }> = ({
  defaultComment,
}) => {
  const userData = useSelector((state: any) => state.user.userData);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [comment, setComment] = useState<IComment>(defaultComment);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // console.log(userData.id, comment.user.id);
    if (userData.id !== comment.user.id) return;
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    // Logic to delete the comment
    handleClose();
  };

  const handleEdit = async () => {
    const newComment = prompt("Edit your comment", comment.body);
    if (!newComment) return;

    const response = await getAxiosInstance(
      import.meta.env.VITE_APP_API_URL
    ).put(`/comments/${comment.id}`, { comment: newComment });
    if (response.status === 200) {
      setComment({ ...comment, body: response.data.comment.body });
    } else {
      console.log(response);
    }
    // Logic to edit the comment
    handleClose();
  };

  return (
    <div className={styles.comment} onContextMenu={handleClick}>
      <div className={styles.user}>
        <img
          src={
            comment.user?.picture ||
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
          }
          alt=""
        />

        <span>Emilevi4</span>
      </div>
      <div className={styles["comment-body"]}>
        {comment.body}
        <LikeAndComment commentsCount={10} defaultLikesCount={10} />
      </div>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
      </Menu>
    </div>
  );
};

export default Comment;

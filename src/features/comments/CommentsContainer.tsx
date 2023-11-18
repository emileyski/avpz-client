import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import styles from "./CommentsContainer.module.css";
import { IComment } from "src/interfaces/IComment";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import getAxiosInstance from "src/api/interceptors";

const CommentsContainer: React.FC<{ postId: string }> = ({ postId }) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handlePublishComment = async () => {
    const response = await getAxiosInstance(
      import.meta.env.VITE_APP_API_URL
    ).post(`/posts/${postId}/comment`, { comment: newComment });

    if (response.status === 201) {
      const comment = response.data as IComment;
      setComments([...comments, comment]);
    } else {
      console.log(response);
    }
    handleCloseDialog();
  };

  useEffect(() => {
    async function fetchComments() {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/posts/${postId}/comments`
      );

      if (response.status === 200) {
        const comments = (await response.json()) as IComment[];
        setComments(comments);
      }
    }

    fetchComments();
  }, [postId]);

  return (
    <div className={styles.container}>
      <button className={styles.addCommentButton} onClick={handleOpenDialog}>
        + Add a comment
      </button>

      {comments.map((comment) => (
        <Comment key={comment.id} defaultComment={comment} />
      ))}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add a Comment</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            placeholder="Type your comment here"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </DialogContent>
        <div className={styles.dialogActions}>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePublishComment}
          >
            Publish
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default CommentsContainer;

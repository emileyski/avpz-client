import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPost } from "src/interfaces/IPost";

const EditPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = React.useState<IPost | null>(null);

  const navigate = useNavigate();

  const handleSave = async () => {
    const sure = window.confirm("Are you sure to save this post?");
    if (!sure) return;

    try {
      const { title, body } = post;

      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/posts/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              `Bearer ${localStorage.getItem("accessToken")}` || "",
          },
          body: JSON.stringify({ title, body }),
        }
      );

      if (response.status === 200) {
        navigate(`/`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/posts/${postId}`
      );
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h5">Edit Post: {post.title}</Typography>
      <TextField
        sx={{ marginTop: "1rem" }}
        label="Title"
        variant="outlined"
        fullWidth
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <TextField
        sx={{ marginTop: "1rem" }}
        label="Body"
        variant="outlined"
        fullWidth
        multiline
        rows={10}
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "1rem" }}
        onClick={handleSave}
      >
        Save
      </Button>
    </Container>
  );
};

export default EditPost;

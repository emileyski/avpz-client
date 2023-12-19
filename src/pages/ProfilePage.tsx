import ArticleItem from "@features/article/ArticleItem";
import PostItem from "@features/post/PostItem";
import { setUserData } from "@features/user/userSlice";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import getAxiosInstance from "src/api/interceptors";
import { IArticle } from "src/interfaces/IArticle";
import { IPost } from "src/interfaces/IPost";

const ProfileAttribute = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      {children}
    </div>
  );
};

const ProfileAttributeButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        border: "1px solid black",
        borderRadius: "15px",
        cursor: "pointer",
        backgroundColor: "#D9DFEF",
        fontSize: "16px",
        fontWeight: "bold",
        padding: "15px",
      }}
    >
      {children}
    </button>
  );
};

const ProfileAttributeTitle = ({ children }) => {
  return (
    <div
      style={{
        border: "solid 1px black",
        borderRadius: "20px",
        marginTop: "19px",
        padding: "18px",
        width: "75%",
        backgroundColor: "#D9DFEF",
        fontWeight: "bold",
        fontSize: "24px",
      }}
    >
      {children}
    </div>
  );
};

const ProfilePage = () => {
  const userData = useSelector((state: any) => state.user.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const posts;
  const [posts, setPosts] = useState<(IPost | IArticle)[]>([]);

  useEffect(() => {
    if (!userData) {
      navigate("/signin");
    }
  }, [userData, navigate]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getAxiosInstance(
        import.meta.env.VITE_APP_API_URL
      ).get("/posts/my-posts");

      if (response.status === 200) {
        setPosts(response.data);
      }
    };

    fetchPosts();
  }, [userData, navigate]);

  const handleChangeName = async () => {
    const newName = prompt("Enter new name");

    const sure = window.confirm("Are you sure to change your name?");
    if (!sure || !newName) return;

    const response = await getAxiosInstance(
      import.meta.env.VITE_APP_API_URL
    ).patch("/user/name", { name: newName });

    if (response.status === 200) {
      dispatch(setUserData(response.data));
    }
  };

  const handleChangeNickname = async () => {
    const newNickname = prompt("Enter new nickname");

    const sure = window.confirm("Are you sure to change your nickname?");
    if (!sure || !newNickname) return;

    const response = await getAxiosInstance(
      import.meta.env.VITE_APP_API_URL
    ).patch("/user/nickname", { nickname: newNickname });

    if (response.status === 200) {
      dispatch(setUserData(response.data));
    }
  };

  const handleChangeEmail = async () => {
    const newEmail = prompt("Enter new email");

    const sure = window.confirm("Are you sure to change your email?");
    if (!sure || !newEmail) return;

    const response = await getAxiosInstance(
      import.meta.env.VITE_APP_API_URL
    ).patch("/user/email", { email: newEmail });

    if (response.status === 200) {
      dispatch(setUserData(response.data));
    }
  };

  return (
    <Container maxWidth="md" sx={{ pt: 2 }}>
      <Grid
        container
        sx={{ border: "solid 1px black", borderRadius: "20px", px: "10px" }}
        xs={12}
      >
        <Grid item xs={6} sx={{ px: "10px" }}>
          <ProfileAttribute>
            <ProfileAttributeTitle>
              Nick-Name: {userData.nickname}
            </ProfileAttributeTitle>
            <ProfileAttributeButton onClick={handleChangeNickname}>
              Edit
            </ProfileAttributeButton>
          </ProfileAttribute>
          <ProfileAttribute>
            <ProfileAttributeTitle>Name: {userData.name}</ProfileAttributeTitle>
            <ProfileAttributeButton onClick={handleChangeName}>
              Edit
            </ProfileAttributeButton>
          </ProfileAttribute>
          <ProfileAttribute>
            <ProfileAttributeTitle>
              Email: {userData.email}
            </ProfileAttributeTitle>
            <ProfileAttributeButton onClick={handleChangeEmail}>
              Edit
            </ProfileAttributeButton>
          </ProfileAttribute>
          <ProfileAttribute>
            <ProfileAttributeTitle>Role: {userData.role}</ProfileAttributeTitle>
          </ProfileAttribute>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            px: "10px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png"
            style={{
              width: "256px",
              height: "256px",
              borderRadius: "50%",
              marginBottom: "10px",
            }}
          />
          <ProfileAttributeButton>Edit photo</ProfileAttributeButton>
        </Grid>
      </Grid>
      {posts.length > 0 && (
        <>
          <h1 style={{ marginTop: "20px" }}>List of my posts:</h1>
          {posts.map((post) =>
            "pictures" in post ? (
              <PostItem key={post.id} post={post as IPost} />
            ) : (
              <ArticleItem key={post.id} article={post as IArticle} />
            )
          )}
        </>
      )}
      {posts.length === 0 && (
        <h1>
          No posts, you can add it <Link to="/create-post">here (post)</Link> or{" "}
          <Link to="/create-article">here (article)</Link>
        </h1>
      )}
    </Container>
  );
};

export default ProfilePage;

import { FunctionComponent } from "react";
import styles from "./Home.module.css";
import Filters from "@components/Filters";
import RandomPeoples from "@components/RandomPeoples";
import PostItem from "@features/post/PostItem";
import { useLoaderData } from "react-router-dom";
import { IPost } from "src/interfaces/IPost";
import { IArticle } from "src/interfaces/IArticle";
import ArticleItem from "@features/article/ArticleItem";
import { IUserSimplified } from "src/interfaces/IUserSimplified";
import getAxiosInstance from "src/api/interceptors";
import axios from "axios";

const Home: FunctionComponent = () => {
  const {
    users,
    posts,
  }: { users: IUserSimplified[]; posts: (IPost | IArticle)[] } =
    useLoaderData() as {
      users: IUserSimplified[];
      posts: (IPost | IArticle)[];
    };

  console.log(posts);

  return (
    <div className={styles.home}>
      <div className={styles.filters}>
        <Filters />
      </div>
      <div className={styles.posts}>
        {posts.map((post) =>
          "pictures" in post ? (
            <PostItem key={post.id} post={post as IPost} />
          ) : (
            <ArticleItem key={post.id} article={post as IArticle} />
          )
        )}
      </div>
      <div className={styles.randomPeopleScreen}>
        <RandomPeoples users={users} />
      </div>
    </div>
  );
};

export async function loader() {
  const [postsResponce, articlesResponce] = await Promise.all([
    localStorage.getItem("accessToken") !== undefined
      ? getAxiosInstance(import.meta.env.VITE_APP_API_URL).get(`/posts`)
      : axios.get(`${import.meta.env.VITE_APP_API_URL}/posts`),
    fetch(`${import.meta.env.VITE_APP_API_URL}/articles`),
  ]);

  const randomUsers = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/user/random?count=6`
  );

  const posts = postsResponce.data as IPost[];
  const articles = (await articlesResponce.json()) as IArticle[];
  const users = await randomUsers.json();

  return { users, posts: [...posts, ...articles] };
}

export default Home;

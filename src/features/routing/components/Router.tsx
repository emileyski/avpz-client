import AppLayout from "@components/AppLayout";
import AddPostForm from "@features/post/AddPostForm";
import EditPost from "@features/post/EditPost";
import CreateArticle from "@pages/CreateArticle";
import EditArticle from "@pages/EditArticle";
import Home, { loader as postsLoader } from "@pages/Home";
import ProfilePage from "@pages/ProfilePage";
import RedirectedPage from "@pages/RedirectedPage";
import SignIn, { action as signinAction } from "@pages/SignIn";
import SignUp, { action as signupAction } from "@pages/SignUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: postsLoader,
      },
      {
        path: "/signup",
        element: <SignUp />,
        action: signupAction,
      },
      {
        path: "/signin",
        element: <SignIn />,
        action: signinAction,
      },
      {
        path: "/create-post",
        element: <AddPostForm />,
      },
      {
        path: "/edit-post/:postId",
        element: <EditPost />,
      },
      {
        path: "/create-article",
        element: <CreateArticle />,
      },
      {
        path: "/edit-article/:articleId",
        element: <EditArticle />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "authCallback",
        element: <RedirectedPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "*",
        element: <div>Not found</div>,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

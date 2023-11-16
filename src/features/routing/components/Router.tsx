import AppLayout from "@components/AppLayout";
import AddPostForm from "@features/post/AddPostForm";
import CreateArticle from "@pages/CreateArticle";
import Home, { loader as postsLoader } from "@pages/Home";
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
        path: "/create-article",
        element: <CreateArticle />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

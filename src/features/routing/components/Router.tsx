import AppLayout from "@components/AppLayout";
import ArticleEditor from "@features/article/ArticleEditor";
import Home from "@pages/Home";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const BaseEditor = () => {
  const [editorValue, setEditorValue] = useState("");

  return (
    <ArticleEditor editorValue={editorValue} setEditorValue={setEditorValue} />
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: (
          <div>
            <Home />
          </div>
        ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
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

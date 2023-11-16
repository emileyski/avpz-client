import ArticleEditor from "@features/article/ArticleEditor";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getAxiosInstance from "src/api/interceptors";

export default function CreateArticle() {
  const [body, setBody] = useState<string>("");
  const [tags, setTags] = useState<string[]>(["tag1", "tag2", "tag3"]);
  const [title, setTitle] = useState<string>("");
  const navigate = useNavigate();

  const handlePublish = async () => {
    const sure = window.confirm("Вы уверены, что хотите опубликовать статью?");
    if (!sure) return;

    const responce = await getAxiosInstance(
      import.meta.env.VITE_APP_API_URL
    ).post(
      "/articles",
      {
        title,
        body,
        tags,
      },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (responce.status === 201) {
      alert("Статья успешно опубликована!");
      navigate("/");
    } else {
      alert("Произошла ошибка при публикации статьи");
    }
  };

  return (
    <ArticleEditor
      editorValue={body}
      setEditorValue={setBody}
      handlePublish={handlePublish}
      tags={tags}
      setTags={setTags}
      title={title}
      setTitle={setTitle}
    />
  );
}

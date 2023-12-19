import ArticleEditor from "@features/article/ArticleEditor";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getAxiosInstance from "src/api/interceptors";
const EditArticle = () => {
  const articleId = useParams().articleId;

  const [body, setBody] = useState("");
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      const url = `${import.meta.env.VITE_APP_API_URL}/articles/${articleId}`;

      console.log(url);

      const response = await getAxiosInstance(
        import.meta.env.VITE_APP_API_URL
      ).get(`/articles/${articleId}`);
      const data = await response.data;
      setBody(data.body);
      setTags(data.tags);
      setTitle(data.title);
    };
    fetchArticle();
  }, [articleId]);

  const handleSave = async () => {
    const sure = window.confirm("Вы уверены, что хотите сохранить статью?");
    if (!sure) return;

    const responce = await getAxiosInstance(
      import.meta.env.VITE_APP_API_URL
    ).patch(
      `/articles/${articleId}`,
      {
        title,
        body,
        tags,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}` || "",
        },
      }
    );

    if (responce.status === 200) {
      alert("Статья успешно сохранена!");
      navigate("/");
    } else {
      alert("Произошла ошибка при сохранении статьи");
    }
  };

  if (!body) {
    return <div>Loading...</div>;
  }

  return (
    <ArticleEditor
      editorValue={body}
      setEditorValue={setBody}
      handlePublish={handleSave}
      tags={tags}
      setTags={setTags}
      title={title}
      setTitle={setTitle}
    />
  );
};

export default EditArticle;

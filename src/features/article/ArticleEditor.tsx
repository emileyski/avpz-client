import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Container, Grid, TextField } from "@mui/material";
import MemoizedChip from "@components/MemoizedChip";

const ArticleEditor: React.FC<{
  editorValue: string;
  setEditorValue: (value: string) => void;
  handlePublish: () => void; // Updated handlePublish function signature
  tags: string[];
  setTags: (tags: string[]) => void;
  title: string;
  setTitle: (title: string) => void;
}> = ({
  editorValue,
  setEditorValue,
  handlePublish,
  tags,
  setTags,
  title,
  setTitle,
}) => {
  const handleEditorChange = (value: string) => {
    console.clear();
    console.log(value);
    setEditorValue(value);
  };

  const handleAddTag = () => {
    const tag = prompt("Введите тег");
    if (!tag) {
      alert('Tag can"t be empty');
      return;
    }

    setTags([...tags, tag]);
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <Container maxWidth="md" sx={{ pt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* Кнопки "Опубликовать" и "Добавить тег" с отступом */}
          <Button
            onClick={() => handlePublish()} // Pass the title to handlePublish
            variant="contained"
            color="primary"
            style={{ marginRight: "8px" }}
          >
            Publish
          </Button>
          <Button
            onClick={() => handleAddTag()}
            variant="contained"
            color="info"
          >
            Add tag
          </Button>
        </Grid>
        <Grid item xs={12}>
          {/* Title input field */}
          <TextField
            sx={{ pb: 2 }}
            label="Title"
            fullWidth
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* Теги */}
          {tags?.map((tag) => (
            <MemoizedChip
              key={tag} // Используем тег в качестве ключа
              tag={tag}
              onDelete={() => handleRemoveTag(tag)}
            />
          ))}
        </Grid>
        <Grid item xs={12}>
          {/* Ваш компонент ArticleEditor */}
          <ReactQuill
            style={{ height: "450px" }}
            theme="snow"
            value={editorValue}
            onChange={handleEditorChange}
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "blockquote",
                  "code-block",
                ],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["link", "image"],
                ["clean"],
                [{ align: [] }],
                [{ color: [] }, { background: [] }],
                [{ font: [] }],
                [{ script: "sub" }, { script: "super" }],
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticleEditor;

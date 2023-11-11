import React, { memo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Container, Grid, Chip } from "@mui/material";

const MemoizedChip: React.FC<{ tag: string; onDelete: () => void }> = memo(
  ({ tag, onDelete }) => (
    <Chip
      label={`#${tag}`}
      onDelete={onDelete}
      style={{
        marginRight: "4px",
        color: "white",
        marginBottom: "4px",
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`,
      }}
    />
  ),
  (prevProps, nextProps) => prevProps.tag === nextProps.tag
);

const PostsEditor: React.FC<{ editorValue: string; setEditorValue: any }> = ({
  editorValue,
  setEditorValue,
}) => {
  const handleEditorChange = (value: string) => {
    console.clear();
    console.log(value);
    setEditorValue(value);
  };

  const [tags, setTags] = useState<string[]>(["tag1", "tag2", "tag3"]);

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
            variant="contained"
            color="primary"
            style={{ marginRight: "8px" }}
          >
            Publish
          </Button>
          <Button
            onClick={() => handleAddTag()}
            variant="contained"
            color="secondary"
          >
            Add tag
          </Button>
        </Grid>
        <Grid item xs={12}>
          {/* Теги */}
          {tags.map((tag) => (
            <MemoizedChip
              key={tag} // Используем тег в качестве ключа
              tag={tag}
              onDelete={() => handleRemoveTag(tag)}
            />
          ))}
        </Grid>
        <Grid item xs={12}>
          {/* Ваш компонент PostsEditor */}
          <ReactQuill
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

export default PostsEditor;

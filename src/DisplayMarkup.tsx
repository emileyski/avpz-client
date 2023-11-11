import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css"; // Добавлен импорт bubble.css

const DisplayMarkup: React.FC<{ markup: string }> = ({ markup }) => {
  return (
    <ReactQuill
      theme="bubble" // Используем bubble theme
      value={markup}
      readOnly={true}
      modules={{
        toolbar: false, // Отключаем toolbar в режиме readOnly
        history: {
          // Отключаем историю в режиме readOnly
          delay: 2000,
          maxStack: 500,
          userOnly: true,
        },
      }}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "align",
        "color",
        "background",
        "font",
        "code-block", // Добавляем поддержку code-block
        "blockquote", // Добавляем поддержку blockquote
      ]}
    />
  );
};

export default DisplayMarkup;

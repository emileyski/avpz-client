import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "./DisplayMarkup.css"; // Import a separate CSS file

const DisplayMarkup: React.FC<{ markup: string; expanded: boolean }> = ({
  markup,
  expanded = false,
}) => {
  return (
    <ReactQuill
      theme="bubble"
      value={expanded ? markup : markup.substring(0, 500) + "..."}
      readOnly={true}
      modules={{
        toolbar: false,
        history: {
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
      className="custom-quill" // Apply a custom class
    />
  );
};

export default DisplayMarkup;

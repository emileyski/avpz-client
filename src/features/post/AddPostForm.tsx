import React, { useState, useRef } from "react";
import styles from "./AddPostForm.module.css";
import { Carousel } from "react-responsive-carousel";
import MemoizedChip from "@components/MemoizedChip";
import getAxiosInstance from "src/api/interceptors";

const AddPostForm = () => {
  const [files, setFiles] = useState<File[]>([]); // Change the initial state to File[]
  const [tags, setTags] = useState<string[]>([]);
  const [isFileInputVisible, setIsFileInputVisible] = useState(false);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isFileInputVisible) {
      const selectedFiles = event.target.files;
      if (selectedFiles) {
        const fileList = Array.from(selectedFiles) as File[];
        setFiles(fileList);
        setIsFileInputVisible(false); // Hide file input after selecting files
      }
    }
  };

  const handleClickAddPhoto = () => {
    setIsFileInputVisible(true);
    fileInput.current?.click();
  };

  const handleAddTag = () => {
    const tagName = prompt("Введите название тега");
    if (tagName) {
      setTags((prevTags) => [...prevTags, tagName]);
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  const handlePublish = async () => {
    const sure = window.confirm("Вы уверены, что хотите опубликовать пост?");
    if (!sure) return;

    try {
      const formData = new FormData();

      // Append all files to the form data with the key "image"
      files.forEach((file, index) => {
        formData.append("image", file, file.name);
      });

      // Append title, body, and tags to the form data
      formData.append("title", title);
      formData.append("body", body);
      tags.forEach((tag, index) => {
        formData.append(`tag${index + 1}`, tag);
      });

      const response = await getAxiosInstance(
        import.meta.env.VITE_APP_API_URL
      ).post("/posts", formData, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Post published successfully!");
      } else {
        alert("Failed to publish post.");
      }
    } catch (error) {
      console.error("Error publishing post:", error);
    }
  };

  return (
    <div className={styles["add-post-container"]}>
      <div className={styles["add-post-upper"]}>
        <img
          className={styles["add-post-arrow"]}
          src="fi_arrow-left.svg"
          alt="Arrow Icon"
        />
        <span className={styles["add-post-header"]}>Создание публикации</span>
        <button
          onClick={handlePublish}
          className={styles["add-post-publish-button"]}
        >
          Поделиться
        </button>
      </div>
      <div className={styles["add-post-content"]}>
        <div className={styles["content-box"]}>
          {isFileInputVisible && (
            <input
              type="file"
              ref={fileInput}
              style={{ display: "none" }}
              multiple
              onChange={handleFileChange}
            />
          )}
          {files.length > 0 && (
            <Carousel autoPlay={true} showThumbs={false}>
              {files.map((file, index) => (
                <img
                  className={styles["carousel-image"]}
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`Selected Image ${index + 1}`}
                />
              ))}
            </Carousel>
          )}
          <>
            <img src="add-icon.svg" alt="Add Icon" />
            <span onClick={handleClickAddPhoto}>Добавьте фото</span>
          </>
        </div>
        <div className={styles["content-box"]}>
          <div className={styles["user-block"]}>
            <img
              src="https://avatars.githubusercontent.com/u/96009930?v=4"
              alt="User Avatar"
            />
            <span>Emilevi4</span>
          </div>
          <div className={styles["inputs-container"]}>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles["title-input"]}
              placeholder="Enter title here..."
            />
            <div className={styles["tags-editor-container"]}>
              {tags.length > 0 && (
                <div className="tags-container">
                  {tags.map((tag) => (
                    <MemoizedChip
                      key={tag} // Используем тег в качестве ключа
                      tag={tag}
                      onDelete={() => handleRemoveTag(tag)}
                    />
                  ))}
                </div>
              )}
              <button
                className={styles["add-tag-button"]}
                onClick={handleAddTag}
              >
                Add Tag
              </button>
            </div>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className={styles["body-input"]}
              placeholder="Enter your story here"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPostForm;

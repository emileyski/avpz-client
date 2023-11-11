import { useState } from "react";
import PostEditor from "./PostsEditor";
import DisplayMarkup from "./DisplayMarkup"; // Новый компонент для отображения разметки

function App() {
  const [editorValue, setEditorValue] = useState("");

  return (
    <div>
      {/* <div style={{ display: "flex" }}> */}
      <PostEditor editorValue={editorValue} setEditorValue={setEditorValue} />
      {/* <DisplayMarkup markup={editorValue} /> */}
      {/* </div> */}
    </div>
  );
}

export default App;

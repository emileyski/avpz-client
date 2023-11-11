import { useState } from "react";
import ArticleEditor from "@features/article/ArticleEditor";

function App() {
  const [editorValue, setEditorValue] = useState("");

  return (
    <div>
      {/* <div style={{ display: "flex" }}> */}
      <ArticleEditor
        editorValue={editorValue}
        setEditorValue={setEditorValue}
      />
      {/* <DisplayMarkup markup={editorValue} /> */}
      {/* </div> */}
    </div>
  );
}

export default App;

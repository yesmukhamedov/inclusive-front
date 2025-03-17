import React, {useState} from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "../style.css";

const Portal = ({ initialCode = "", readOnly=true, theme = "light" }) => {
  const [code, setCode] = React.useState(initialCode);
  return (
    <AceEditor
      mode="python"
      theme={theme === "dark" ? "monokai" : "tomorrow"}
      name="UNIQUE_ID_OF_DIV"
      value={code}
      onChange={newCode=>setCode(newCode)}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        wrap: true,
        readOnly: true,
        highlightActiveLine: false,
        showPrintMargin: false,
      }}
      style={{ width: "100%", height: `${code.split("\n").length * 16}px` }}
    />
  );
};

export default Portal;

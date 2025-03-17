import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";

const Editor = ({inputInitial, outputInitial}) => {
  const [code, setCode] = useState(inputInitial);
  const [output, setOutput] = useState(outputInitial);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const onExecuteCode = () => {
    try {
      // Здесь мы симулируем выполнение Python кода. В реальной ситуации,
      // вы бы использовали Brython или другой подход для выполнения Python кода.
      // Например, Brython будет выполнять код и выводить результат в элемент `output`.
      // Это лишь заглушка для демонстрации.
      setOutput("Результат выполнения кода");
    } catch (err) {
      setOutput("Ошибка при выполнении кода: " + err.message);
    }
  };

  const onClearOutput = () => {
    setOutput("");
  };

  return (
    <div className="editor" style={{ display: "flex", flexDirection: "row", height: "100%" }}>
      <div className="editor" style={{ width: "50%" }}>
        <AceEditor
          mode="python"
          theme="monokai"
          name="code-editor"
          value={code}
          onChange={handleCodeChange}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            wrap: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
          style={{ width: "100%", height: "100%" }}
        />
        <button
          onClick={onExecuteCode}
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          Выполнить
        </button>
      </div>
      <div className="editor" style={{ width: "50%", borderLeft: "1px solid grey" }}>
        <div className="editor" style={{ position: "relative", width: "100%", height: "100%" }}>
          <button
            onClick={onClearOutput}
            style={{ position: "absolute", right: 0, top: 0 }}
          >
            Очистить
          </button>
          <AceEditor
            mode="python"
            theme="monokai"
            name="code-editor"
            value={code}
            readOnly
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              wrap: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
            style={{ width: "100%", height: "100%" }}
          />
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {output}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Editor;

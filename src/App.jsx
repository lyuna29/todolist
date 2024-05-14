import { useState } from "react";
import "./App.css";

function App() {
  const style = {
    display: "flex",
    gap: "12px",
    padding: "20px",
  };

  const squareStyle = {
    width: "300px",
    height: "150px",
    border: "2px solid rgb(0, 0, 0)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  };

  const [contents, setContents] = useState([
    //초기 항목 저장
    {
      id: new Date().getTime(),
      title: " 리액트 공부 ",
      text: "리액트 기초를 공부해봅시다 ",
      isDone: false,
    },
    {
      id: new Date().getTime() + 1,
      title: " 리액트 공부 ",
      text: "리액트 기초를 공부해봅시다. ",
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addTextHandler = () => {
    const newContent = {
      id: new Date().getTime(),
      title: title,
      text: text,
      isDone: false,
    };
    setContents([...contents, newContent]);
    setTitle("");
    setText("");
  };

  const deleteTextHandler = (id) => {
    const deleteContents = contents.filter((content) => {
      return content.id !== id;
    });

    setContents(deleteContents);
  };

  const toggleIsDone = (id) => {
    const newContents = contents.map((content) =>
      content.id === id
        ? {
            ...content,
            isDone: !content.isDone,
          }
        : content
    );
    setContents(newContents);
  };

  const Content = ({ content, deleteTextHandler, toggleIsDone }) => {
    const { title, text, id, isDone } = content;

    return (
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <button onClick={() => deleteTextHandler(id)}>삭제</button>
        <button onClick={() => toggleIsDone(id)}>
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    );
  };

  return (
    <div className="all">
      <div className="wrap">
        <div className="header">My Todo List</div>
        <div className="inputText">
          <div>
            제목{" "}
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            내용{" "}
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
          <button className="addbtn" onClick={addTextHandler}>
            추가하기
          </button>
        </div>
        <div className="workDone">
          <div className="workBox">
            <h2>Working..🔥</h2>
            <div style={style}>
              {contents
                .filter((content) => !content.isDone)
                .map(function (content) {
                  return (
                    <div style={squareStyle} key={content.id}>
                      <Content
                        content={content}
                        deleteTextHandler={deleteTextHandler}
                        toggleIsDone={toggleIsDone}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div>
            <div className="doneBox"></div>
            <h2>Done..!🎉</h2>
            <div style={style}>
              <div style={squareStyle}>
                {contents
                  .filter((content) => content.isDone)
                  .map(function (content) {
                    return (
                      <Content
                        key={content.id}
                        content={content}
                        deleteTextHandler={deleteTextHandler}
                        toggleIsDone={toggleIsDone}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
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

export default Content;

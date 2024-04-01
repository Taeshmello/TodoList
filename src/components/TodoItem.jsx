import "./TodoItem.css";
export const TodoItem = ({id, isDone, content, date}) => {
  return (
    <div className="TodoItem">
      <input readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date().toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

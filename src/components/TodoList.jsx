const TodoList = ({ item, deleteBtnHandler, stateBtnHandler, undoOrCom }) => {
  if (item.title === "") {
    //state 초기화로 만들어지는 빈 todo 출력 안되도록
    return;
  }
  return (
    <div className="todoBox">
      <div className="contentBox">
        <h3 className="title">{item.title}</h3>
        <p className="boxBody">{item.body}</p>
      </div>
      <div className="btns">
        <button
          onClick={() => {
            deleteBtnHandler(item.id);
          }}
        >
          삭제하기
        </button>{" "}
        <button
          onClick={() => {
            stateBtnHandler(item.id);
          }}
        >
          {undoOrCom}
        </button>
      </div>
    </div>
  );
};

export { TodoList };

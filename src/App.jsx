import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import "./App.css";

function App() {
  const initTodo = [
    {
      id: 0,
      title: "",
      body: "",
      isDone: false,
    },
  ];

  const [todo, setTodo] = useState(initTodo);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //isDone 초기값이 false라 빈 박스 나오는 문제 생김;; 수정 필

  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyInputHandler = (event) => {
    setBody(event.target.value);
  };

  const addBtnHandler = () => {
    const newTodo = {
      id: todo.length,
      title,
      body,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
    setBody("");
  };

  const isWorkingTodo = (todoList) => {
    return todoList.filter((item) => {
      return item.isDone === false;
    });
  };

  const isDoneTodo = (todoList) => {
    return todoList.filter((item) => {
      return item.isDone === true;
    });
  };

  const deleteBtnHandler = (id) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };
  const comBtnHandler = (id) => {
    const newTodo = todo.map((item) => {
      if (item.id === id) {
        item.isDone = true;
      }
      return item;
    });
    setTodo(newTodo);
  };
  const undoBtnHandler = (id) => {
    const newTodo = todo.map((item) => {
      if (item.id === id) {
        item.isDone = false;
      }
      return item;
    });
    setTodo(newTodo);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>My Todo List</h1>
        <p>React</p>
      </div>
      <div className="addTodo">
        <div className="inputArea">
          <div className="titleArea">
            <p>제목</p>
            <input value={title} onChange={titleInputHandler} />
          </div>
          <div className="bodyArea">
            <p>내용</p>
            <input value={body} onChange={bodyInputHandler} />
          </div>
        </div>
        <button id="addBtn" onClick={addBtnHandler}>
          추가하기
        </button>
      </div>
      <div id="todoList">
        <div id="undoArea">
          <h2>working.. 🔥</h2>
          <div id="undoList">
            {isWorkingTodo(todo).map((item) => {
              return (
                <TodoList
                  key={item.id}
                  item={item}
                  deleteBtnHandler={deleteBtnHandler}
                  stateBtnHandler={comBtnHandler}
                  undoOrCom={"완료"}
                />
              );
            })}
          </div>
        </div>
        <div id="comArea">
          <h2>Done..🎉</h2>
          <div id="doneList">
            {isDoneTodo(todo).map((item) => {
              return (
                <TodoList
                  key={item.id}
                  item={item}
                  deleteBtnHandler={deleteBtnHandler}
                  stateBtnHandler={undoBtnHandler}
                  undoOrCom={"취소"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

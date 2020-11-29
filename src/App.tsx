import React from "react";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";

const App: React.FC = () => {
  const todos = [{ id: 1, title: "Bring Milk!" }];

  const addTodoHandler = (title: string) => {
    console.log("title", title);
  };

  return (
    <div className="App">
      <h3>Todo App</h3>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;

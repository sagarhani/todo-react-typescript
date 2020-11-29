import React from "react";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";

const App: React.FC = () => {
  const todos = [{ id: 1, title: "Bring Milk!" }];

  return (
    <div className="App">
      <h3>Todo App</h3>
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
};

export default App;

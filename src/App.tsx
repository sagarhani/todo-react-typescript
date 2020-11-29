import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const initialTodo: Todo[] = [{ id: "1", title: "Bring Milk!" }];
  const [todos, setTodos] = useState<Todo[]>(initialTodo);

  const addTodoHandler = (title: string) => {
    console.log("title", title);
    setTodos(prev => [...prev, { id: Math.random().toString(), title: title }]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <h3>Todo App</h3>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default App;

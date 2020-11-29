import React from "react";

interface TodoListProps {
  items: { id: string; title: string }[];
  onDeleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
          <span>{item.title}</span>
          <button onClick={props.onDeleteTodo.bind(null, item.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};

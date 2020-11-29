import React from "react";

interface TodoListProps {
  items: { id: number; title: string }[];
}

export const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

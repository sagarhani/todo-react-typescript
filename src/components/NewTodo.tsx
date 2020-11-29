import React, { useRef } from "react";

export const NewTodo: React.FunctionComponent = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // you can also add a type guard here to check if current property has any value
    const enteredText = titleInputRef.current!.value;
    console.log("enteredText", enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo-input">Todo Title</label>
      <input type="text" id="todo-input" ref={titleInputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

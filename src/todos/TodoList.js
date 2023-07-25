import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoFrom";

const TodoList = ({ todos = [{"text":"hello" }] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos?.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
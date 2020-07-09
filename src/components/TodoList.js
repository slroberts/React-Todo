import React from "react";
import Todo from "./Todo";
import {Box} from "@material-ui/core";

const TodoList = (props) => {
  return (
    <Box>
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </Box>
  );
};

export default TodoList;

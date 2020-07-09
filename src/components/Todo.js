import React from "react";
import {Box} from "@material-ui/core";

const Todo = (props) => {
  return (
    <Box
      mb={3}
      p={4}
      bgcolor="success.main"
      color="text.primary"
      fontFamily="fontFamily"
      boxShadow={2}
      borderRadius="borderRadius"
      onClick={() => props.toggleCompleted(props.todo.id)}
    >
      {props.todo.task}
    </Box>
  );
};
export default Todo;

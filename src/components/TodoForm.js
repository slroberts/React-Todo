import React from "react";
import {Box, TextField} from "@material-ui/core";

const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} autoComplete="off">
      <Box mb={2} width={1}>
        <TextField
          id="task"
          type="text"
          name="task"
          value={props.task}
          onChange={props.handleChange}
          label="Enter Task"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box>
        <button>Add Task</button>
        <button onClick={props.clearCompleted}>Clear Completed Task</button>
      </Box>
    </form>
  );
};

export default TodoForm;

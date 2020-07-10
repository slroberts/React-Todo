import React from "react";
import {Box, TextField, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  todoForm: {
    "& .MuiFormLabel-root.Mui-focused": {
      color: "rgb(76, 175, 80) !important",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgb(76, 175, 80) !important",
    },
    "& button": {
      border: "none",
      outline: "none",
      width: "100%",
      marginBottom: "1rem",
      padding: "1.25rem",
      borderRadius: ".25rem",
      backgroundColor: "#121212",
      color: "white",
      fontSize: ".9rem",

      "&:hover": {
        backgroundColor: "rgb(76, 175, 80) !important",
        color: "#121212",
      },
    },
  },
  clearBtn: {
    backgroundColor: "rgb(255, 152, 0) !important",
    color: "#121212",
  },
}));

const TodoForm = (props) => {
  const classes = useStyles();

  return (
    <form
      onSubmit={props.handleSubmit}
      autoComplete="off"
      className={classes.todoForm}
    >
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
      <Grid container justify="space-between">
        <Grid item xs={12}>
          <button className={classes.addBtn}>Add Task</button>
        </Grid>
        <Grid item xs={12}>
          <button onClick={props.clearCompleted} className={classes.clearBtn}>
            Clear Completed Task
          </button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TodoForm;

import React from "react";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const useStyles = makeStyles(() => ({
  todo: {
    fontSize: "1.5rem",
    borderBottom: "solid thin grey",
    paddingBottom: "1rem",
  },
  icon: {
    marginRight: ".5rem",
  },
}));

const Todo = (props) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      fontFamily="fontFamily"
      mb={3}
      alignItems="center"
      onClick={() => props.toggleCompleted(props.todo.id)}
      className={classes.todo}
    >
      {props.todo.completed ? (
        <CheckBoxIcon
          className={classes.icon}
          style={{color: "rgb(76, 175, 80)"}}
        />
      ) : (
        <CheckBoxOutlineBlankIcon className={classes.icon} />
      )}
      {props.todo.task}
    </Box>
  );
};
export default Todo;

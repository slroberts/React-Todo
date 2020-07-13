import React from "react";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles(() => ({
  todo: {
    fontSize: "1.5rem",
    borderBottom: "solid thin gainsboro",
    paddingBottom: "1rem",
    color: "#121212",
  },
  icon: {
    marginRight: ".5rem",
    color: "gainsboro",
  },
}));

const Todo = (props) => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Box
        display="flex"
        fontFamily="fontFamily"
        alignItems="center"
        flexGrow={1}
        mb={3}
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
      <Box onClick={() => props.handleDelete(props.todo.id)}>
        <DeleteForeverIcon
          fontSize="large"
          style={{color: "rgb(255, 0, 20)"}}
        />
      </Box>
    </Box>
  );
};
export default Todo;

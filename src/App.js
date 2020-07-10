import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import {Container, Grid, Box} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const todos = [
  {
    task: "ex. Organize Garage",
    id: 1528817077286,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos,
      task: "",
      open: false,
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  addTask = (e, task) => {
    e.preventDefault();

    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTask],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addTask(e, this.state.task);
    this.setState({task: ""});
  };

  toggleCompleted = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();

    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  };

  // handleOpen = () => {
  //   this.setState({
  //     open: true,
  //   });
  // };

  // handleClose = () => {
  //   this.setState({
  //     open: false,
  //   });
  // };

  todoData;

  componentDidMount() {
    localStorage.getItem("todos") &&
      this.setState({
        todos: JSON.parse(localStorage.getItem("todos")),
      });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("todos", JSON.stringify(nextState.todos));
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Grid container spacing={4}>
          <button>
            <SearchIcon onClick={this.handleOpen} />
          </button>
          <Grid item xs={12}>
            <Box fontFamily="fontFamily" textAlign="center">
              <h2>Todo List: MVP</h2>
            </Box>
            <TodoForm
              task={this.state.task}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              addTask={this.addTask}
              clearCompleted={this.clearCompleted}
            />
          </Grid>
          <Grid item xs={12}>
            <TodoList
              todos={this.state.todos}
              toggleCompleted={this.toggleCompleted}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;

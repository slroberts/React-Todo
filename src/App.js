import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import {Container, Grid} from "@material-ui/core";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos,
      task: "",
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

  render() {
    return (
      <Container maxWidth="sm">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <h2>Todo List: MVP</h2>
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

import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    let newTask = { ...task, id: uuidv4() };
    this.setState((state) => ({
      tasks: [...state.tasks, newTask],
    }));
  }

  render() {
    return (
      <div>
        {this.state.tasks.map((task) => (
          <Todo key={task.id} id={task.id} task={task.task} />
        ))}
        <NewTodoForm addTask={this.addTask} />
      </div>
    );
  }
}
export default TodoList;

import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task) {
    let newTask = { ...task, id: uuidv4() };
    this.setState((state) => ({
      tasks: [...state.tasks, newTask],
    }));
  }

  removeTask(id) {
    this.setState((st) => ({
      tasks: st.tasks.filter((el) => el.id !== id),
    }));
  }

  render() {
    return (
      <div>
        {this.state.tasks.map((task) => (
          <div key={task.id} id={task.id}>
            <Todo
              key={task.id}
              id={task.id}
              task={task.task}
              removeTask={this.removeTask}
            />
            <button onClick={() => this.removeTask(task.id)}>X</button>
          </div>
        ))}
        <NewTodoForm addTask={this.addTask} />
      </div>
    );
  }
}
export default TodoList;

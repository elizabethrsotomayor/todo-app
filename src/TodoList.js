import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
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

  updateTask(id, updatedTask) {
    const updatedTodos = this.state.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, task: updatedTask };
      }
      return task;
    });
    this.setState({ tasks: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    this.setState({ tasks: updatedTodos });
  }

  render() {
    return (
      <div>
        {this.state.tasks.map((task) => (
          <div className="TodoList-item" key={task.id} id={task.id}>
            <Todo
              key={task.id}
              id={task.id}
              task={task.task}
              completed={task.completed}
              removeTask={this.removeTask}
              updateTask={this.updateTask}
              toggleTodo={this.toggleCompletion}
            />
          </div>
        ))}
        <NewTodoForm addTask={this.addTask} />
      </div>
    );
  }
}
export default TodoList;

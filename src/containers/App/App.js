import React from 'react';
import logo from '../../logo.svg';
import './App.css';

import Navigation from "../../components/Navigation/Navigation";
import TodoForm from "../../components/Forms/TodoForm";
import Task from "../../components/Task/Task";
import { todos } from "../../tasks.json";

function App() {

  // State hooks
  const [todo, setTodo] = React.useState(todos);

  function handleAddTodo(task) {
    // Add task to the todo state array
    setTodo([...todo, task]);
  }

  function handleDeleteTodo(index) {
    if (window.confirm('are u sure? ', index)) {
      setTodo(
        todo.filter((e, i) => {
          return i !== index;
        })
      );
    }
  }

  const tasks = todo.map((task, i) => {
    return (
      <div className="col-md-4" key={i}>
        <Task task={task} index={i} onDeleteTodo={handleDeleteTodo} />
      </div>
    )
  })

  return (
    <div className="App">
      <Navigation title='Tasks' href='#' length={todo.length} />

      <div className="container">
        <div className="row mt-4">

          <div className="col-md-4 text-center">
            <TodoForm onAddTodo={handleAddTodo} />
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <div className="col-md-8">
            <div className="row">
              { tasks }
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import LeftTodo from './LeftTodo'
import Filters from './Filters'
import ClearCompleted from './ClearCompleted'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
        <LeftTodo />
        <Filters />
        <ClearCompleted />
      </div>
    );
  }
}

export default App;

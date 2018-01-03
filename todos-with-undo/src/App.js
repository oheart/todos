import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import AddTodo from './AddTodo'
import Todos from './Todos'
import Filters from './Filters'
import UndoRedo from './UndoRedo'

class App extends Component {
  render() {
    return (
      <div className="App">
         <AddTodo />
         <Todos />
         <Filters />
         <UndoRedo />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import LeftTodo from './LeftTodo'
import Filters from './Filters'
import ClearCompleted from './ClearCompleted'


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          value: "aaa",
          Checked: true
        },
        {
          value: "bbb",
          Checked: false
        },
        {
          value: "ccc",
          Checked: false
        }
      ],
      filters: [
        {
          name: "All",
          isActive: true
        },
        {
          name: "Active",
          isActive: false
        },
        {
          name: "Completed",
          isActive: false
        }
      ]
    }
  }
  addTodo(value) {
    this.setState({
      todos: [{ value }, ...this.state.todos]
    })
  }
  toggleTodo(todoIndex) {
    this.setState({
      todos: this.state.todos.map((todo, index) => {
        if (index === todoIndex) {
          return { ...todo, Checked: !todo.Checked }
        }
        return todo
      })
    })
  }
  toggleAll(isChecked) {
    this.setState({
      todos: this.state.todos.map((todo) => ({ ...todo, Checked: isChecked }))
    })
  }
  deleteTodo(todoIndex) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => index != todoIndex)
    })
  }
  activeFilter(filterIndex) {
    this.setState({
      filters: this.state.filters.map((filter, index) => {
        //  等价于
        //  if (index === filterIndex) return {...filter, isActive: true}
        //  return {...filter, isActive: false}
        return { ...filter, isActive: (index === filterIndex) }
      })
    })
  }
  ClearCompleted() {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.Checked)
    })
  }
  render() {
    return (
      <div className="App">
        <AddTodo
          addTodo={this.addTodo.bind(this)}
          todos={this.state.todos}
          toggleAll={this.toggleAll.bind(this)} />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
          filters={this.state.filters} />
        <LeftTodo
          todos={this.state.todos} />
        <Filters
          filters={this.state.filters}
          activeFilter={this.activeFilter.bind(this)}
        />
        <ClearCompleted
          ClearCompleted={this.ClearCompleted.bind(this)}
        />
      </div>
    );
  }
}

export default App;

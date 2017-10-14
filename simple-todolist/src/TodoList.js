import React, { Component } from 'react'

class TodoList extends Component {
    render() {
        const { todos, toggleTodo,deleteTodo,filters } = this.props;
        const activeFilter = filters.filter(filterItem => filterItem.isActive)[0];
        let todosToDisplay = todos;

        if(activeFilter.name == filters[1].name){
            todosToDisplay = todos.filter(todo => !todo.Checked)
        }else if(activeFilter.name == filters[2].name){
            todosToDisplay = todos.filter(todo => todo.Checked)
        }
        return (
            <div>
                {
                    todosToDisplay.map((todo, index) =>
                        <div>
                            <input type="checkbox"
                                checked={todo.Checked}
                                onChange={(e) => toggleTodo(index)} />
                            <span>{todo.value}</span>
                            <span onClick={(e) => deleteTodo(index)}> X</span>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default TodoList
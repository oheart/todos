import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from './actions'
import { filterTypes } from './constants'

class TodoList extends Component {
    render() {
        const { todos_redux: todos, filters_redux: filters } = this.props;
        console.log(todos);


        const activeFilter = filters.find(filterItem => filterItem.isActive);
        let todosToDisplay = todos;

        if (activeFilter.name === filterTypes.Active) {
            todosToDisplay = todos.filter(todo => !todo.Checked)
        } else if (activeFilter.name === filterTypes.Completed) {
            todosToDisplay = todos.filter(todo => todo.Checked)
        }
        return (
            <div>
                {
                    todosToDisplay.map((todo, index) =>
                        <div key={todo.ID}>
                            <input type="checkbox"
                                checked={todo.Checked}
                                onChange={(e) => this.props.dispatch_toggleTodo(index)} />
                            <span>{todo.value}</span>
                            <span onClick={(e) => this.props.dispatch_deleteTodo(index)}> X</span>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos_redux: state.todos,
        filters_redux: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_toggleTodo: (todoIndex) => dispatch(actions.toggleTodo(todoIndex)),
        dispatch_deleteTodo: (todoIndex) => dispatch(actions.deleteTodo(todoIndex))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
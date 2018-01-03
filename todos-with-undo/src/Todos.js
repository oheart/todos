import React, { Component } from 'react'
import { connect } from 'react-redux'


import * as actions from './actions'
import { filterTypes } from './constants'


class Todos extends Component {
    render() {
        const { todos_redux: todos, todos_filter: filters } = this.props;
        console.log(todos);
        // console.log(todos.present);
        
        const activeFilter = filters.find(filterItem => filterItem.isActive);
        let todosToDisplay = todos;

        if (activeFilter.name === filterTypes.Active) {
            todosToDisplay = todos.filter(todo => !todo.Checked)
        } else if (activeFilter.name === filterTypes.Completed) {
            todosToDisplay = todos.filter(todo => todo.Checked);
        }
        return (
            <div>
                {
                    todosToDisplay.map((todo, index) =>
                        <div key={todo.ID}>
                            <span
                                onClick={(e) => this.props.dispatch_toggleTodo(index)}
                                style={{ 'textDecoration': (todo.Checked ? 'line-through' : 'none') }}>
                                {todo.value}
                            </span>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos_redux: state.undoableTodos.present,
        todos_filter: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_toggleTodo: (todoIndex) => dispatch(actions.toggleTodo(todoIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
import React, { Component } from 'react'

class LeftTodo extends Component {
    render() {
        const { todos } = this.props;
        const activeTodos = todos.filter((todo) => !todo.Checked)
        return (
            <div>
                {activeTodos.length}
                Left count
            </div>
        )
    }
}

export default LeftTodo
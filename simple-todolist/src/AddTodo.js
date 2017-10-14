import React, { Component } from 'react'

class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }
    handleKeyDown(e) {
        const value = e.target.value;
        if (e.key == 'Enter' && value.trim() != '') {
            this.props.addTodo(value);
            this.state.inputValue = '';
        }
    }
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        const { todos,toggleAll } = this.props;
        const allChecked = todos.every(todo => todo.Checked);
        return (
            <div>
                <input type="checkbox" 
                    checked= {allChecked}
                    onChange={ (e) => toggleAll(e.target.checked)}
                    />
                <input type="text"
                    value={this.state.inputValue}
                    placeholder="Add todo"
                    onKeyDown={(e) => this.handleKeyDown(e)}
                    onChange={(e) => this.handleChange(e)} />
            </div>
        )
    }
}

export default AddTodo
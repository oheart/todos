import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from './actions'

class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }
    handleKeyDown(e) {
        const value = e.target.value;
        if (e.key === 'Enter' && value.trim() !== '') {
            this.props.dispatch_addTodo(value);
            this.setState({
                inputValue: ''
            })
        }
    }
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        const { todos_redux: todos } = this.props;
        const allChecked = todos.every(todo => todo.Checked);
        return (
            <div>
                <input type="checkbox" 
                    checked= {allChecked}
                    onChange={ (e) => this.props.dispatch_toggleAll(e.target.checked)}
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


const mapStateToProps = (state) => {
    return {
        todos_redux: state.todos
    }
}


const mapDisPatchToProps = (dispatch) => {
    return {
        dispatch_addTodo: (text) => dispatch(actions.addTodo(text)),
        dispatch_toggleAll: (allCompleted) => dispatch(actions.toggleAll(allCompleted))
    }
}



export default connect(mapStateToProps,mapDisPatchToProps)(AddTodo)
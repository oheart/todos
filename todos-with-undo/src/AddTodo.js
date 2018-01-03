import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from './actions'

class AddTodo extends Component{
    constructor(){
        super();
        this.state = {
            inputValue:''
        }
    }
    handleKeyDown(e){
        const value = e.target.value;
        if(e.key === 'Enter' && value.trim() !== ''){
            this.props.dispatch_addTodo(value);
            this.setState({
                inputValue: ''
            })
        }
    }
    handleChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    render(){
        return (
            <div>
                <input type="text"
                     placeholder="AddTodo"
                     value={this.state.inputValue}
                     onKeyDown={(e) => this.handleKeyDown(e)}
                     onChange={(e) => this.handleChange(e)}
                    />
            </div>
        )
    }
}


const mapDisPatchToProps = (dispatch) => {
    return {
        dispatch_addTodo: (text) => dispatch(actions.addTodo(text))        
    }
}

export default connect(null,mapDisPatchToProps)(AddTodo)
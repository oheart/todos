import React, { Component } from 'react'
import {connect} from 'react-redux';

import * as actions from './actions';

class ClearCompleted extends Component {
    render() {
        // const { ClearCompleted } = this.props;
        return (
            <div onClick={this.props.dispatch_clearCompleted}>
                clear completed
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_clearCompleted: () => dispatch(actions.clearCompleted())
    }
}
export default connect(null,mapDispatchToProps)(ClearCompleted)
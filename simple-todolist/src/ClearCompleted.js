import React, { Component } from 'react'

class ClearCompleted extends Component {
    render() {
        const { ClearCompleted } = this.props;
        return (
            <div onClick={ClearCompleted}>
                clear completed
            </div>
        )
    }
}

export default ClearCompleted
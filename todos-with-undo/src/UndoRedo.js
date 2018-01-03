import React, { Component } from 'react'
import  {connect} from 'react-redux'
import {ActionCreators as UndoActionCreators} from 'redux-undo'

class UndoRedo extends Component{
    render(){
        return (
            <div>
                <button disabled={!this.props.dispatch_canUndo}
                    onClick={(e) => this.props.dispatch_onUndo()}>
                        Undo
                </button>
                <button  disabled={!this.props.dispatch_canRedo}
                    onClick={(e) => this.props.dispatch_onRedo()}>
                        Redo
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dispatch_canUndo: state.undoableTodos.past.length > 0,
        dispatch_canRedo: state.undoableTodos.future.length > 0
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_onUndo: () => dispatch(UndoActionCreators.undo()),
        dispatch_onRedo: () => dispatch(UndoActionCreators.redo())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UndoRedo)
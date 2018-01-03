import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './actions'
import './index.css';


class Filters extends Component{
    render(){
        const {filters_redux: filters} = this.props;
        return (
            <div className="filter-wrapper">
                {
                    filters.map((filter) => {
                        if(filter.isActive){
                            return (
                                <span key={filter.name}>
                                    {filter.name}&nbsp;
                                 </span>
                            )
                        }
                        return (
                            <a href="#" 
                                style={{'cursor':'pointer'}}
                                key={filter.name}
                                onClick={ (e) => this.props.dispatch_switchFilter(filter.name)}>
                                {filter.name}&nbsp;
                            </a>                            
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters_redux: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_switchFilter: (filterName) => dispatch(actions.switchFilter(filterName))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filters)
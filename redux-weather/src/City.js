import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from './actions'

class City extends Component{
    render(){
        return (
            <div>
               <button onClick={() => this.props.dispatch_weather('shanghai')}>ShangHai</button>
                <button onClick={() => this.props.dispatch_weather('beijing')}>BeiJing</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        weather_redux: state.weather
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_weather: (cityName) => dispatch(actions.reqWeather(cityName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
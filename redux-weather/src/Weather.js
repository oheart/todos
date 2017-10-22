import React, { Component } from 'react'
import { connect } from 'react-redux'


class Weather extends Component{
    render(){
        const { weather_redux: weather } = this.props;
        return (
            <div>
                {weather}
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        weather_redux: state.weather
    }
}

export default connect(mapStateToProps, null)(Weather)
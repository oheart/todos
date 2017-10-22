import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'


const initialWeather = 'default Weather';

function weather(weather = initialWeather, action){
    switch(action.type){
        case actionTypes.UPDATEWEATHER:
            return action.weather
        default:
            return weather;
    }
}

const weatherApp = combineReducers({
    weather
})
export default weatherApp



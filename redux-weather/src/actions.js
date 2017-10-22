import  * as actionTypes from './actionTypes'


export function updateWeather(weather){
    return {
        type: actionTypes.UPDATEWEATHER,
        weather
    }
}

//调用天气接口（异步action）
export function reqWeather(cityName){
   return function(dispatch){
        return fetch(`https://free-api.heweather.com/v5/weather?city=${cityName}&key=081c4501e8c545c98ff4b58391975d8a`)
                .then(response => response.json())
                .then(json => dispatch(updateWeather(json['HeWeather5'][0]['now']['tmp'])))
   }
}
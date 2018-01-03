import * as actionTypes from './actionTypes'

export function addTodo(text){
    return {
        type: actionTypes.ADD_TODO,
        text
    }
}


export function switchFilter(filterName){
    return {
        type: actionTypes.SWITCH_FILTER,
        filterName
    }
}

export  function toggleTodo(todoIndex){
    return {
        type: actionTypes.TOGGLE_TODO,
        todoIndex
    }
}
import * as actionTypes from './actionTypes'

export function addTodo(text){
    return {
        type: actionTypes.ADD_TODO,
        text
    }
}

export function toggleTodo(todoIndex){
    return {
        type: actionTypes.TOGGLE_TODO,
        todoIndex
    }
}

export function deleteTodo(todoIndex){
    return {
        type: actionTypes.DELETE_TODO,
        todoIndex
    }
}

export function toggleAll(allCompleted){
    return {
        type: actionTypes.TOGGLE_ALL,
        allCompleted       
    }
}

export function clearCompleted(){
    return {
        type: actionTypes.CLEAR_COMPLETED
    }
}

export function switchFilter(filterName){
    return {
        type: actionTypes.SWITCH_FILTER,
        filterName
    }
}
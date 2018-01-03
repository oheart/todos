import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import * as actionTypes from './actionTypes'
import { filterTypes } from './constants'
import utils from './utils'


const initalTodos = [];
const initialFilters = [
    {
        name: filterTypes.All,
        isActive: true
    },
    {
        name: filterTypes.Active,
        isActive: false
    },
    {
        name: filterTypes.Completed,
        isActive: false
    }
];

function todos(todos = initalTodos, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                {
                    value: action.text,
                    Checked: false,
                    ID: utils.generateId()
                },
                ...todos
            ]
        case actionTypes.TOGGLE_TODO:
            return todos.map((todo,index) => {
                if(index === action.todoIndex){
                    return {
                        ...todo,
                        Checked: !todo.Checked
                    }
                }
                return todo;
            })
        default:
            return todos;
    }
}

function filters(filters = initialFilters, action) {
    switch (action.type) {
        case actionTypes.SWITCH_FILTER:
            return filters.map(filter => {
                if (filter.name === action.filterName) {
                    return { ...filter, isActive: true }
                }
                return {
                    ...filter,
                    isActive: false
                }
            })
        default:
            return filters;
    }
}

// 可以撤销重做的todos
const  undoableTodos = undoable(todos);
const todoApp = combineReducers({
    undoableTodos,
    filters
})

export default todoApp


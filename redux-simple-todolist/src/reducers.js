import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'
import {filterTypes} from './constants'
import utils from './utils'

const initialTodos = [
    // {
    //     value: "88888888",
    //     Checked: true
    //   },
    //   {
    //     value: "bbb",
    //     Checked: false
    //   },
    //   {
    //     value: "ccc",
    //     Checked: false
    //   }
];
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
function todos(todos = initialTodos, action){
    switch(action.type){
        case actionTypes.ADD_TODO:
            return [
               {
                   value: action.text,
                   Checked: false,
                   ID: utils.generateID()
               },
               ...todos
            ]
        case actionTypes.TOGGLE_TODO:
            return  todos.map((todo,index) => {
                if(index === action.todoIndex){
                    return {
                        ...todo,
                        Checked: !todo.Checked
                    }
                }
                return todo;
            })
        case actionTypes.DELETE_TODO:
            return  todos.filter((todo,index) => index !== action.todoIndex);

        case actionTypes.TOGGLE_ALL:
            return todos.map(todo => ({...todo,Checked: action.allCompleted}));

        case actionTypes.CLEAR_COMPLETED:
            return todos.filter((todo) => !todo.Checked);
                
        default:
            return todos;
    }
}

function filters(filters = initialFilters,action){
    switch(action.type){
        case actionTypes.SWITCH_FILTER:
            return filters.map(filter => {
                if(filter.name === action.filterName){
                    return {...filter, isActive: true}
                }
                return {
                    ...filter,
                    isActive: false
                }
            });
        default:
            return filters;
    }
}


const todoApp = combineReducers({
    todos,
    filters
  })
  
  export default todoApp
import {initialState, emptyItem, SELECT_ITEM, DELETE_ITEM, ADD_ITEM, EDIT_ITEM} from './constants.js'

export default function table (state = initialState, action) {

let newState = {...state};

switch(action.type){
  case SELECT_ITEM:
    newState.selectItem = action.payload;
    return newState;

  case DELETE_ITEM:
    newState.listItems = action.payload;
    return newState;
  default:
    return state;
  }
}
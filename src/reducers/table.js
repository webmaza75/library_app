import {initialState, SELECT_ITEM, DELETE_ITEM} from './constants.js'

export default function table (state = initialState, action) {

let newState = {...state};

switch(action.type){
  case SELECT_ITEM:
    newState.selectItem = action.payload;
    break;

  case DELETE_ITEM:
    newState.listItems = newState.listItems.filter((item) => item.id != action.payload.id);
    newState.selectItem = null
    break;
  default:
    return state;
  }
  return newState;
}
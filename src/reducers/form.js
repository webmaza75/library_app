import {initialState, emptyItem, SELECT_ITEM, DELETE_ITEM, ADD_ITEM, EDIT_ITEM} from './constants.js'

export default function form (state = initialState, action) {
  let newState = {...state};

  switch(action.type){
    case ADD_ITEM:
      newState.listItems = 123;//{...newState.ListItems, item};
      return newState;
  
    case EDIT_ITEM:
      //newState.listItems[index] = item;
      newState.listItems = action.payload;
      return newState;
    default:
      return state;
    }
}
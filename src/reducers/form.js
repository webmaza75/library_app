import {initialState, ADD_ITEM, EDIT_ITEM} from './constants.js'

export default function form (state = initialState, action) {
  let newState = {...state};
  alert(JSON.stringify(newState));
  //let newSelectItem = {...state.selectItem};
  let index;

  switch(action.type){
    case ADD_ITEM:
      newState.listItems = [...newState.listItems, action.payload];
      break;
    case EDIT_ITEM:
      index = action.payload.id ? newState.listItems.indexOf(action.payload) : -1;
      newState.listItems[index] = action.payload;
      break;
    default:
      return state;
    }
    return newState;
}
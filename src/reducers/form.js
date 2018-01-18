import {
  ADD_ITEM,
  EDIT_ITEM,
  SELECT_ITEM,
  DELETE_ITEM
} from './constants.js'

import { globalState } from './index'


export default function form(state = globalState, action) {

  let newState = { ...state };
  let tmplistItems;

  switch (action.type) {
    case ADD_ITEM:
      newState.table.listItems = [...newState.table.listItems, action.payload];
      break;
    case EDIT_ITEM:
      tmplistItems = [...newState.table.listItems];
      tmplistItems[tmplistItems.indexOf(newState.table.selectItem)] = action.payload;
      newState.table.listItems = tmplistItems;
      newState.table.selectItem = null;
      break;
    case SELECT_ITEM:
      newState.table.selectItem = action.payload;
      break;

    case DELETE_ITEM:
      newState.table.listItems = newState.table.listItems.filter((item) => item.id != action.payload.id);
      newState.table.selectItem = null
      break;
    default:
      return state;
  }
  return newState;
}
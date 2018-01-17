import { initialState } from './table';

const ADD_ITEM = 'add_item';
const EDIT_ITEM = 'edit_item';

export default function form (state = initialState, action) {
  let newState = {...state};

  switch(action.type){
    case ADD_ITEM:
      newState.listItems = {...newState.ListItems, item};
      return newState;
  
    case EDIT_ITEM:
      newState.listItems[index] = item;
      newState.listItems = action.payload;
      return newState;
    default:
      return state;
    }
}
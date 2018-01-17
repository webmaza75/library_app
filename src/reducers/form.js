import { initialState } from './table';

const ADD_ITEM = 'add_item';
const EDIT_ITEM = 'edit_item';

export default function form (state = {initialState}, action) {
  let newState = {...state};

  switch(action.type){
    case ADD_ITEM:
      newState.listItems = action.payload;
      return newState;
  
    case EDIT_ITEM:
      newState.listItems = action.payload;
      return newState;
    default:
      return state;
    }
}
/*
        let tmpList = [...this.state.listItems];
        tmpList[index] = form;
*/
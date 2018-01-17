const initialState = {
  listItems: [
    {id: 1, title: 'title1', author: 'author1', year: 'year1'},
    {id: 2, title: 'title2', author: 'author2', year: 'year2'}
  ],
  selectItem: null,
  form: {
    id: null,
    title: '',
    author: '',
    year: ''
  }
}

const SELECT_ITEM = 'select_item';
const DELETE_ITEM = 'delete_item';

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
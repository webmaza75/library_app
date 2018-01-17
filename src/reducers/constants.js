export const initialState = {
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

export const emptyItem = {
    id: null,
    title: '',
    author: '',
    year: ''
}

export const SELECT_ITEM = 'select_item';
export const DELETE_ITEM = 'delete_item';
export const ADD_ITEM = 'add_item';
export const EDIT_ITEM = 'edit_item';
import { IBook } from '../interfaces/interfaces'

export const emptyItem: IBook = {
    id: null,
    title: '',
    author: '',
    year: ''
}

export const SELECT_ITEM : string = 'select_item';
export const DELETE_ITEM : string = 'delete_item';
export const ADD_ITEM : string = 'add_item';
export const EDIT_ITEM : string = 'edit_item';
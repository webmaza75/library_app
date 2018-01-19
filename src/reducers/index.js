//import { combineReducers } from 'redux'
import form from './form'

export const globalState = {
  table: {
    listItems: [
      {id: 1, title: 'title1', author: 'author1', year: 'year1'},
      {id: 2, title: 'title2', author: 'author2', year: 'year2'}
    ],
    selectItem: null
  }, 
  form: {
    form: {
    id: null,
    title: '',
    author: '',
    year: ''
    }
  }
} 

export const rootReducer =  form;

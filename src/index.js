import React from 'react'
import { render } from 'react-dom'
import LibraryBox from './components/LibraryBox.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index.js'

import './css/style.css';

const listItems = [
    {id: 1, title: 'title1', author: 'author1', year: 'year1'},
    {id: 2, title: 'title2', author: 'author2', year: 'year2'}
];



render(
    <Provider store = {createStore(rootReducer)} >
        <LibraryBox listItems = {listItems} />
    </Provider>,
    document.getElementById('root')
);
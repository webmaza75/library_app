import React from 'react'
import { render } from 'react-dom'
import LibraryBox from './components/LibraryBox.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index.js'

import './css/style.css';

render(
    <Provider store = {createStore(rootReducer)} >
        <LibraryBox />
    </Provider>,
    document.getElementById('root')
);
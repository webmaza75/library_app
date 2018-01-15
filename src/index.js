import React from 'react'
import { render } from 'react-dom'
import LibraryBox from './components/LibraryBox.js'

import './css/style.css';

const listItems = [
    {id: 1, title: 'title1', author: 'author1', year: 'year1'},
    {id: 2, title: 'title2', author: 'author2', year: 'year2'}
];

render(
    <LibraryBox listItems = {listItems} />,
    document.getElementById('root')
);
import React from 'react'
import { render } from 'react-dom'
import LibraryBox from './components/LibraryBox.js'

const listItems = [
    {title: 'title1', author: 'author1', year: 'year1'},
    {title: 'title2', author: 'author2', year: 'year2'}
];

render(
    <LibraryBox listItems = {listItems} />,
    document.getElementById('root')
);
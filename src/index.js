import React from 'react'
import { render } from 'react-dom'

let Hello = 'Hello!';
render(
    <div>
        <div className='hello'>{Hello}</div>
    </div>,

    document.getElementById('root')
);

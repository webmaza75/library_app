import React from 'react'
import MyInput from './MyInput'

class Form extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`submitted: ${this.props}`);
    };

    render() {
        return <form onSubmit={this.handleSubmit}>
            <MyInput name='title' label='Название книги:' placeholder='Название книги' />
            <MyInput name='author' label='Автор:' placeholder='Автор' />
            <MyInput name='year' label='Год издания:' placeholder='Год издания' />
            <input type='submit' value='Добавить' />
        </form>;
    }
}

export default Form;

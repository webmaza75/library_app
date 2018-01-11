import React from 'react'
import MyInput from './MyInput'
import Table from './Table'

class Form extends React.Component {

    state = {
        form: {
            title: '',
            author: '',
            year: ''
        },
        submitted: false,
        listItems: [{title: 'title1', author: 'author1', year: 'year1'}]
    };

    handleChangeField = (fieldName, { target: { value } }) => {
        const { form } = this.state;
        this.setState({ form: { ...form, [fieldName]: value } });
    };

    handleChangeTitle = this.handleChangeField.bind(null, 'title');
    handleChangeAuthor = this.handleChangeField.bind(null, 'author');
    handleChangeYear = this.handleChangeField.bind(null, 'year');

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true/*, listItems: this.state.listItems.push(this.state.form)*/ });
    };

    render() {
        const { form } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <MyInput
                        name='title'
                        label='Название книги:'
                        placeholder='Название книги'
                        change={this.handleChangeTitle} />
                    <MyInput
                        name='author'
                        label='Автор:'
                        placeholder='Автор'
                        change={this.handleChangeAuthor} />
                    <MyInput
                        name='year'
                        label='Год издания:'
                        placeholder='Год издания'
                        change={this.handleChangeYear} />
                    <input type='submit' value='Добавить' />
                </form>
                <Table data={this.state.listItems} />
            </div>
        );
    }
}

export default Form;

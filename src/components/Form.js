import React from 'react'

class Form extends React.Component {

    state = {
        form: {
            title: '',
            author: '',
            year: ''
        },
        submitted: false
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

        if (!this.title.value.trim() || !this.author.value.trim() || !this.year.value.trim()) {
            alert('Please fill all form fields.');
            return ;
        }

        this.props.addBook(this.title.value, this.author.value, this.year.value);
        this.setState({ submitted: true });
        [this.title.value, this.author.value, this.year.value] = ['', '', ''];

        this.setState({ form: {title: '', author: '', year: '' } });
    };

    render() {
        const { form } = this.state;

        return (
            <form onSubmit={this.handleSubmit} >
                <div className='input__group'>
                    <label className='input__label' htmlFor='title' >Название книги:</label>
                    <input
                        name='title'
                        placeholder='Название книги'
                        ref={input => this.title = input}
                        onChange={this.handleChangeTitle} />
                 </div>
                <div className='input__group'>
                    <label className='input__label' htmlFor='author' >Автор:</label>
                    <input
                        name='author'
                        placeholder='Автор'
                        ref={input => this.author = input}
                        onChange={this.handleChangeAuthor} />
                </div>
                <div className='input__group'>
                    <label className='input__label' htmlFor='year' >Год издания:</label>
                    <input
                        name='year'
                        placeholder='Год издания'
                        ref={input => this.year = input}
                        onChange={this.handleChangeYear} />
                </div>
                <input type='submit' value='Добавить' />
            </form>
        );
    }
}

export default Form;

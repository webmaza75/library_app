import React from 'react'

class Form extends React.Component {

    state = {
        form: {
            title: '',
            author: '',
            year: ''
        },
        submitted: false,
        item: {}
    };
    
    componentWillReceiveProps (nextProps) {
        this.setState({form: nextProps.item});
    }

    handleChangeField = (fieldName, { target: { value } }) => {
        const { form } = this.state;
        this.setState({ form: { ...form, [fieldName]: value } });
    };
    
    handleChangeTitle = this.handleChangeField.bind(null, 'title');
    handleChangeAuthor = this.handleChangeField.bind(null, 'author');
    handleChangeYear = this.handleChangeField.bind(null, 'year');

    addBookEvent = () => {
        const { form } = this.state;

        if (!form.title.trim() || !form.author.trim() || !form.year.trim()) {
            alert('Please fill all form fields.');
            return ;
        }

        this.props.addBook(form.title, form.author, form.year);
        this.setState({ submitted: true });
        [form.title, form.author, form.year] = ['', '', ''];

        this.setState({ form: {title: '', author: '', year: '' } });
    }

    editBookEvent = () => {
        const { form } = this.state;

        if (!form.title.trim() || !form.author.trim() || !form.year.trim()) {
            alert('Please fill all form fields.');
            return ;
        }


        this.props.editBook(form.title, form.author, form.year);

        this.setState({ submitted: true });
        [form.title, form.author, form.year] = ['', '', ''];

        this.setState({ form: {title: '', author: '', year: '' } });
    }

    render() {
        const { form } = this.state;

        return (
            <form>
                <div className='input__group'>
                    <label className='input__label' htmlFor='title' >Название книги:</label>
                    <input
                        name='title'
                        placeholder='Название книги'
                        value = {form.title}
                        onChange={this.handleChangeTitle} />
                </div>
                <div className='input__group'>
                    <label className='input__label' htmlFor='author' >Автор:</label>
                    <input
                        name='author'
                        placeholder='Автор'
                        value = {form.author}                        
                        onChange={this.handleChangeAuthor} />
                </div>
                <div className='input__group'>
                    <label className='input__label' htmlFor='year' >Год издания:</label>
                    <input
                        name='year'
                        placeholder='Год издания'
                        value = {form.year}                                                
                        onChange={this.handleChangeYear} />
                </div>
                <input type='button' value='Добавить' onClick={this.addBookEvent} />
                <input type='button' value='Редактировать' onClick={this.editBookEvent} />
            </form>
        );
    }
}

export default Form;

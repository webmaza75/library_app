import * as React from 'react'
import { connect } from 'react-redux'
import {emptyItem, ADD_ITEM, EDIT_ITEM} from '../reducers/constants'
import { IBook, IGlobalState } from '../interfaces/interfaces';


let counter = (function() {
	var count: number = 2;
	return  function () {
		return ++count;
	}
})();

interface IProps {
    form: IBook,
    nextProps: any,
    addBook: (item: IBook) => void,
    editBook: (item: IBook) => void,
    item: IBook,
    listItems: IBook[]
}

interface IState {
    form: IBook,
    item?: IBook,
    listItems?: IBook[],
}

class Form extends React.Component <IProps, IState> {

    constructor (props: IProps) {
        super(props);
    }

    state: any = {
        form: emptyItem
    }

    isValidForm (form) {
        if (!form.title.trim() || !form.author.trim() || !form.year.trim()) {
            alert('Please fill all form fields.');
            return false;
        }
        return true;
    }
    
    componentWillReceiveProps (nextProps) {
        if( nextProps.item ) {
            this.setState({form: nextProps.item});
        }
    }

    handleChangeField = (fieldName, {target: {value}}) => {
        const { form } = this.state;
        this.setState({
            form: {
                ...form,
                fieldName: value
            },
            item: {}
        });
    };
    
    handleChangeTitle = this.handleChangeField.bind(null, 'title');
    handleChangeAuthor = this.handleChangeField.bind(null, 'author');
    handleChangeYear = this.handleChangeField.bind(null, 'year');

    addBookEvent = () => {
        const { form } = this.state;

        if (this.isValidForm(form) ) {

            this.props.addBook(form);
            this.setState({ 
                form: emptyItem, 
                item: null
            });
        }
    }

    editBookEvent = () => {
        const { form } = this.state;
/*
        if (index < 0) {
            alert('Невозможно сохранить, книга не найдена! Попробуйте еще раз.');
            return;
        }
*/
        if (this.isValidForm(form) ) {
            this.props.editBook(form);
            this.setState({ form: emptyItem });
        }
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
                {form.id ?
                    <input type='button' value='Редактировать' onClick={this.editBookEvent} /> :
                    <input type='button' value='Добавить' onClick={this.addBookEvent} />
                }
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        item: state.table.selectItem,
        listItems: state.table.listItems,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addBook: function (item) {
            item.id = counter();
            const action = {
                type: ADD_ITEM,
                payload: item
            };
            dispatch(action);
        },
        editBook: function (item) {

            const action = {
                type: EDIT_ITEM,
                payload: item
            };
            dispatch(action);
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);

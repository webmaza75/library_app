import React from 'react'
import Form from './Form'
import Table from './Table'
import { connect } from 'react-redux'

function mapStateToProps (state) {
    return {
      listItems: state.listItems,
      form: state.form
    }
  }


class LibraryBox extends React.Component {

    state = {
        listItems: this.props.listItems,
        item: {},
        maxId: this.props.listItems.length > 0 ? this.props.listItems[this.props.listItems.length - 1].id : -1
    };

    generateCounter = () => this.state.maxId + 1;

    addBook = (item) => {

        item.id = this.generateCounter();

        this.setState({
            listItems: [...this.state.listItems, item],
            maxId: item.id,
            item: null
        });
    }

    selectBook(book) {
        this.setState({
            item: book
        });
    }

    editBook = (item) => {

        let index = this.state.listItems.indexOf(this.state.item);

        if (index < 0) {
            alert('Невозможно сохранить, книга не найдена! Попробуйте еще раз.');
            return;
        }

        let tmpList = [...this.state.listItems];
        tmpList[index] = item;

        this.setState({
            listItems: tmpList,
            item: null 
        });
    }


    deleteBook(book) {
        let listItems = this.state.listItems.filter((item) => item.id != book.id);

        this.setState({
            listItems: listItems
        });
    }


    render() {

        const { form } = this.props.form;
        const { listItems } = this.props.listItems;

        return (
            <div>
                <Form /*addBook={this.addBook} item={this.state.item} editBook={this.editBook}*/ />
                <Table /*
                    data={this.state.listItems} 
                    deleteBook={this.deleteBook.bind(this)}
                    selectBook={this.selectBook.bind(this)}*/ /> 
            </div>
        );
    }
}

//export default LibraryBox;
export default connect(mapStateToProps, null)(LibraryBox);
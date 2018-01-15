import React from 'react'
import Form from './Form'
import Table from './Table'


class LibraryBox extends React.Component {

    state = {
        listItems: this.props.listItems,
        item: {},
        maxId: this.props.listItems.length > 0 ? this.props.listItems[this.props.listItems.length - 1].id : -1
    };

    generateCounter = () => ++this.state.maxId;

    addBook = (bookTitle, bookAuthor, bookYear) => {
        let book = {
            id: this.generateCounter(),
            title: bookTitle,
            author: bookAuthor,
            year: bookYear
        };

        this.setState({
            listItems: [...this.state.listItems, book],
            maxId: book.id
        });
    }

    selectBook(book) {
        this.setState({
            item: book
        });
    }

    editBook = (bookTitle, bookAuthor, bookYear) => {
        //const list = this.state.listItems;
        let index = this.state.listItems.indexOf(this.state.item);
        let book = this.state.listItems[index];

        book.title = bookTitle; book.author = bookAuthor; book.year = bookYear;

        this.setState({
            listItems: this.state.listItems //list
        });
    }


    deleteBook(book) {
        let listItems = this.state.listItems.filter((item) => item.id != book.id);

        this.setState({
            listItems: listItems
        });
    }


    render() {

        return (
            <div>
                <Form addBook={this.addBook} item={this.state.item} editBook={this.editBook} />
                <Table 
                    data={this.state.listItems} 
                    deleteBook={this.deleteBook.bind(this)}
                    selectBook={this.selectBook.bind(this)} />
            </div>
        );
    }
}

export default LibraryBox;
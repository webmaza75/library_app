import React from 'react'
import Form from './Form'
import Table from './Table'


class LibraryBox extends React.Component {

    state = {
        listItems: this.props.listItems,
        item: {}
    };

    addBook = (bookTitle, bookAuthor, bookYear) => {
        let book = {
            title: bookTitle,
            author: bookAuthor,
            year: bookYear
        };

        this.setState({
            listItems: this.state.listItems.concat([book])
        });
    }

    selectBook(idBook) {

        let item = this.state.listItems[idBook];
        item.id = idBook;

        this.setState({
            item: item
        });
    }

    editBook = (idBook, bookTitle, bookAuthor, bookYear) => {
        const list = this.state.listItems;
        list[idBook] = {title: bookTitle, author: bookAuthor, year: bookYear};

        this.setState({
            listItems: list
        });
    }


    deleteBook(idBook) {
        let listItems = this.state.listItems.filter((item, index) => index != idBook);

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
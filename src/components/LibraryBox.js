import React from 'react'
import Form from './Form'
import Table from './Table'


class LibraryBox extends React.Component {

    state = {
        listItems: this.props.listItems
    };

    addBook(bookTitle, bookAuthor, bookYear) {
        let book = {
            title: bookTitle,
            author: bookAuthor,
            year: bookYear
        };

        this.setState({
            listItems: this.state.listItems.concat([book])
        });
    }

    render() {

        return (
            <div>
                <Form addBook={this.addBook.bind(this)} />
                <Table data={this.state.listItems} />
            </div>
        );
    }
}

export default LibraryBox;
import React from 'react'
import Row from './Row'
//import { connect } from 'react-redux'

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const deleteBook = this.props.deleteBook;
        const selectBook = this.props.selectBook;

        const items = this.props.data.map(function(item, index) {
            return <Row 
                key={index} 
                index={index} 
                data={item} 
                deleteBook={deleteBook} 
                selectBook={selectBook} />;
        });
        

        return (
            <table>
                <tbody>
                    {items}
                </tbody>
            </table>
        );
    }
}

export default Table;

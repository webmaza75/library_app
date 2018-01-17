import React from 'react'
import Row from './Row'
import { connect } from 'react-redux'
import {initialState, emptyItem, SELECT_ITEM, DELETE_ITEM, ADD_ITEM, EDIT_ITEM} from '../reducers/constants.js'

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //const deleteBook = this.props.deleteBook;
       // const selectBook = this.props.selectBook;

        const items = this.props.data.map(function(item, index) { //state
            return <Row 
                key={index} 
                index={index} 
                data={item} 
                deleteBook={ this.props.deleteBook.bind(this, item) }  //deleteBook={deleteBook} 
                selectBook={ this.props.selectBook.bind(this, item) } />;
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

function mapStateToProps(state) {
    return { data: state.listItems };
}

function mapDispatchToProps(dispatch) {
    return { 
        selectBook: function (item) {

            const action = {
                type: SELECT_ITEM,
                payload: item
            };
            dispatch(action);
        },
        deleteBook: function (item) {
            
            const action = {
                type: DELETE_ITEM,
                payload: item
            };
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

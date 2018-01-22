import * as React from 'react'
import Row from './Row'
import { connect } from 'react-redux'
import {SELECT_ITEM, DELETE_ITEM} from '../reducers/constants'
import { IBook, IGlobalState, IAction } from '../interfaces/interfaces';

interface IProps {
    form: IBook,
    props: IGlobalState,
    nextProps: any,
    data: IBook[],
    deleteBook: (item: IBook) => void,
    selectBook: (item: IBook) => void,
    action: IAction
}

interface IState {
    item: IBook|null,
    listItems: IBook[]|null,
    action: IAction
}

class Table extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const deleteBook = this.props.deleteBook;
        const selectBook = this.props.selectBook;

        const items = this.props.data.map(function(item: IBook, index: number) { //state
            return <Row 
                key={index} 
                index={index} 
                data={item} 
                deleteBook={ deleteBook.bind(this, item) }  //deleteBook={deleteBook} 
                selectBook={ selectBook.bind(this, item) } />;
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

function mapStateToProps(state: IGlobalState) {
    return { 
        data: state.table.listItems,
        item: state.table.selectItem
    };
}

function mapDispatchToProps(dispatch) {

    return { 
        selectBook: function (item: IBook) {

            const action: IAction = {
                type: SELECT_ITEM,
                payload: item
            };
            dispatch(action);
        },
        deleteBook: function (item: IBook) {
            
            const action = {
                type: DELETE_ITEM,
                payload: item
            };
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

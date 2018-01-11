import React from 'react'
import Row from './Row'

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = this.props.data.map(function(item,index){
            return <Row key={index} data={item} />;
        });

        return (
            <table>
                {items}
            </table>
        );
    }
}

export default Table;

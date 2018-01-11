import React from 'react'

class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return (
            <tr key={this.props.index} >
                <td>{data.title}</td>
                <td>{data.author}</td>
                <td>{data.year}</td>
            </tr>
        );
    }
}

export default Row;

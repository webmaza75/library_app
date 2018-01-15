import React from 'react'

class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return (
            <tr>
                <td>{data.title}</td>
                <td>{data.author}</td>
                <td>{data.year}</td>
                <td>
                    <button onClick={this.props.selectBook.bind(this, data)}>
                        Edit
                    </button>
                </td>
                <td>
                    <button onClick={this.props.deleteBook.bind(this, data)}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default Row;

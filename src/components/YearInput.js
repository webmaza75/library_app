import React from 'react'

class YearInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text };
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    render() {
        return <input placeholder='Год издания' type='number' min='1500' onChange={this.handleChange} value={this.state.text} />;
    }
}

export default YearInput;

import React from 'react'

class TitleInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text };
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    render() {
        return <input placeholder='Название книги' onChange={this.handleChange} value={this.state.text} />;
    }
}

export default TitleInput;
import React from 'react'

class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text };
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    render() {
        return (<div className='input__group'>
            <label className='input__label' htmlFor={this.props.name} >{this.props.label}</label>
            <input className='input__field'  id={this.props.name} placeholder={this.props.placeholder} onChange={this.handleChange} value={this.state.text} />
            </div>
        );
    }
}

export default MyInput;

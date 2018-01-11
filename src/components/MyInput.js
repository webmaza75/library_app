import React from 'react'

class MyInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='input__group'>
            <label className='input__label' htmlFor={this.props.name} >{this.props.label}</label>
            <input
                className='input__field'
                id={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.change} />
            </div>
        );
    }
}

export default MyInput;

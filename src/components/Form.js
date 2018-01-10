import React from 'react'
import TitleInput from './TitleInput'
import AuthorInput from './AuthorInput'
import YearInput from './YearInput'

class Form extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`submitted: ${this.props}`);
    };

    render() {
        return <form onSubmit={this.handleSubmit}>
            <TitleInput />
            <AuthorInput />
            <YearInput />
            <input type='submit' value='Submit' />
        </form>;
    }
}

export default Form;

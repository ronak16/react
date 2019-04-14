
import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
         
        };

        this.state = this.initialState;

    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, email, phone } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} required />
                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={this.handleChange} required/>
                <label>Phone</label>    
                <input 
                    type="text" 
                    name="phone" 
                    value={phone} 
                    onChange={this.handleChange} required/>    
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
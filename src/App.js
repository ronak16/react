import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
      contacts: []
    };

    hydrateStateWithLocalStorage() {
      // for all items in state
      for (let key in this.state) {
        // if the key exists in localStorage
        if (localStorage.hasOwnProperty(key)) {
          // get the key's value from localStorage
          let value = localStorage.getItem(key);
            
          try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
          } catch (e) {
            // handle empty string
            this.setState({ [key]: value });
          }
        }
      }
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();
    }

    removeContact = index => {
        const { contacts } = this.state;

        const updatedList = contacts.filter((contact, i) => { 
          return i !== index;
        });

        this.setState({
            contacts : updatedList
        });
        // update localStorage
        localStorage.setItem("contacts", JSON.stringify(updatedList));
    }
    
    handleSubmit = contact => {
      const list = [...this.state.contacts, contact];
      this.setState({contacts: list});
      localStorage.setItem("contacts", JSON.stringify(list));
    }

    render() {
        const { contacts } = this.state;
        return (
            <div className="container">
              <h3 className="text-center">Add Contact</h3>
              <Form handleSubmit={this.handleSubmit} />
              <Table
                    contactData={contacts}
                    removeContact={this.removeContact}
                />
            </div>
        );
    }
}

export default App;
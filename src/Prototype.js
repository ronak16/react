import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateAccount from './CreateAccount.js'

class Prototype extends Component {

  onCreateAccount() {
    alert('Account Created');
  }

  render() {
    return (
        <div>
            <CreateAccount onCreateAccount={this.onCreateAccount}/>
        </div>
    );
  }
}

export default Prototype;
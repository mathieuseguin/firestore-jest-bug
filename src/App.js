import React, { Component } from 'react';

import { firestore } from './firebase'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    firestore.collection('tasks').add({
      'title': 'new task',
    })
    .then((docRef) => {
      console.log(`Document written with ID: ${docRef.id}`)
    })
    .catch(function(error) {
      console.error(`Error adding document: ${error}`)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

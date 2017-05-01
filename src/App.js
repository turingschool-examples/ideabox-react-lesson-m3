import React, { Component } from 'react';
import './App.css';
import CreateIdea from './CreateIdea';

class App extends Component {
  addIdea() {
    console.log('Cupcake?')
    console.log(this)
  }

  render() {
    return (
      <div className="App">
        <h1>We should create an idea!</h1>
        <CreateIdea handleSubmit={this.addIdea.bind(this)} />
      </div>
    );
  }
}

export default App;

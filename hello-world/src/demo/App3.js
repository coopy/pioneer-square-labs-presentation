/**
 * 3: Refactor and improve input string matching
 */
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

const fruits = ['apple', 'apelsin', 'avocado', 'banana', 'boisenberry'];

class App extends Component {

  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  onInputChanged(value) {
    this.setState({
      value
    });
  }

  match(fruit) {
    const { value } = this.state;
    const lowerFruit = fruit.toLowerCase();
    const lowerValue = value && value.toLowerCase();
    return value && lowerFruit.startsWith(lowerValue);
  }

  render() {
    return (
      <div className="App">
        <input onChange={ev => this.onInputChanged(ev.target.value)} />
        <ul className="Typeahead-list">
          {
            fruits
              .filter(fruit => this.match(fruit))
              .map((fruit, index) => (
                <li key={index}>{fruit}</li>
              ))
          }
        </ul>
      </div>
    );
  }
}

export default App;

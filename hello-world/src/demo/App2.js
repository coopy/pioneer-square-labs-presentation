/**
 * 2: Render a typeahead
 */
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

const fruits = ['apple', 'avocado', 'banana', 'boisenberry'];

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  onInputChanged(value) {
    this.setState({
      value
    });
  }

  render() {
    return (
      <div className="App">
        <input onChange={ev => this.onInputChanged(ev.target.value)} />
        <ul className="Typeahead-list">
          {
            fruits
              .filter(fruit => fruit.startsWith(this.state.value))
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

/**
 * 4: Refactor: Break out components
 */

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

const fruits = ['apple', 'apelsin', 'avocado', 'banana', 'boisenberry'];

/*
// Equivalent to:
function TypeaheadListItem(props) {
  return ReactDom.createElement('li', { key: props.index }, [props.fruit]);
}
*/
const TypeaheadListItem = props => (
  <li key={props.index}>{props.fruit}</li>
);

// Functional stateless component
const TypeaheadList = props => {

  const match = (fruit) => {
    const { value } = props;
    const lowerFruit = fruit.toLowerCase();
    const lowerValue = value && value.toLowerCase();
    return value && lowerFruit.startsWith(lowerValue);
  }

  return (
    <ul className="Typeahead-list">
      {
        props.fruits
          .filter(fruit => match(fruit))
          .map((fruit, index) => (
            <TypeaheadListItem fruit={fruit} key={index} />
          ))
      }
    </ul>
    );
}

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

  render() {
    return (
      <div className="App">
        <input className="Typeahead-input" onChange={ev => this.onInputChanged(ev.target.value)} />
        <TypeaheadList fruits={fruits} value={this.state.value} />
      </div>
    );
  }
}

export default App;

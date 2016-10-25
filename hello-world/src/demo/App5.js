/**
 * 5: Add mouseover behaviors
 */

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

const fruits = ['apple', 'apelsin', 'avocado', 'banana', 'boisenberry'];

// Functional stateless component
const TypeaheadListItem = props => (
  <li
    key={props.index}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
    className={"Typeahead-list-item " + (props.highlight ? "highlight" : "")}
  >
    {props.fruit}
  </li>
);

const TypeaheadList = props => {

  const { value, fruits, highlightedIndex, setHighlightedIndex } = props;

  const match = (fruit, value) => {
    const lowerFruit = fruit.toLowerCase();
    const lowerValue = value && value.toLowerCase();
    return value && lowerFruit.startsWith(lowerValue);
  };

  const onMouseEnter = index => setHighlightedIndex(index);
  const onMouseLeave = () => setHighlightedIndex(null);

  return (
    <ul className="Typeahead-list">
      {
        props.fruits
          .filter(fruit => match(fruit, value))
          .map((fruit, index) => (
            <TypeaheadListItem
              highlight={index === highlightedIndex}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={onMouseLeave}
              fruit={fruit}
              key={index} />
          ))
      }
    </ul>
    );
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      value: '',
      highlightedIndex: null
    };
  }

  onInputChanged(value) {
    this.setState({
      value
    });
  }

  setHighlightedIndex(index) {
    this.setState({
      highlightedIndex: index
    });
  }

  render() {
    return (
      <div className="App">
        <input
          className="Typeahead-input"
          onChange={ev => this.onInputChanged(ev.target.value)}
        />
        <TypeaheadList
          fruits={fruits}
          value={this.state.value}
          setHighlightedIndex={index => this.setHighlightedIndex(index)}
          highlightedIndex={this.state.highlightedIndex}
        />
      </div>
    );
  }
}

export default App;

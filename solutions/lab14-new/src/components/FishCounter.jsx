import { Component } from 'react';

import './styles.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfFish: 0,
    };
    this.incrementFishCounter = this.incrementFishCounter.bind(this);
    this.setNumberOfFish = this.setNumberOfFish.bind(this);
  }

  setNumberOfFish(newNumber) {
    this.setState({ numberOfFish: newNumber });
  }
  incrementFishCounter() {
    this.setNumberOfFish((currentVal) => currentVal + 1);
  }
  render() {
    return (
      <div className="App">
        <h1>Fish Counter</h1>
        <h2>As of right now, I've counted {this.state.numberOfFish} Fish!</h2>
        <button onClick={this.incrementFishCounter}>Count a Fish!</button>
      </div>
    );
  }
}

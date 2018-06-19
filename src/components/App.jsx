import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
  state = {
    fishes: {},
    orders: {}
  }
  addFish = (fish) => {
    // copy of the existing state
    const fishes = { ...this.state.fishes };
    // new one
    fishes[`fish${Date.now()}`] = fish;
    // update state
    this.setState({
      fishes
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='Fresh Daily'/>
        </div>
        <Order/>
        <Inventory addFish={this.addFish}/>
      </div>
    )
  } 
}

export default App;
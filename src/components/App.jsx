import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
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
  loadSamplesFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({
      order: order
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='Fresh Daily'/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key =>
              <Fish
              key={key}
              index={key}
              details={this.state.fishes[key]}
              addToOrder={this.addToOrder}/>
            )}
          </ul>
        </div>
        <Order order={this.state.order} fishes={this.state.fishes}/>
        <Inventory addFish={this.addFish} loadSamplesFishes={this.loadSamplesFishes}/>
      </div>
    )
  } 
}

export default App;
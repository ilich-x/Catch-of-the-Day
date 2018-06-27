import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }
  componentDidMount() {
    const { params } = this.props.match;
    const localStorageOrder = localStorage.getItem(params.storeId)
    if (localStorageOrder) {
      this.setState({
        order: JSON.parse(localStorageOrder)
      })
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    }); 
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    )
  }


  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state };
    fishes[key] = updatedFish;
    this.setState({ fishes })
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
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSamplesFishes={this.loadSamplesFishes}
          fishes={this.state.fishes}
        />
      </div>
    )
  } 
}

export default App;
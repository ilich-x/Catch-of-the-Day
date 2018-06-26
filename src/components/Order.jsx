import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOrders = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable =  fish.status.available === 'available'
    if (isAvailable) {
      return <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available</li>
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    )
  }
  render() {
    const orderId = Object.keys(this.props.order);
    const total = orderId.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Orders</h2>
        <ul>{orderId.map(this.renderOrders)}</ul>
        <div className="total">
          Total: 
          <strong>{formatPrice(total)}</strong>
        </div>
      </div> 
    )
  } 
}

export default Order;
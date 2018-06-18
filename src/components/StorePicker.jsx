import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  storeNameInput = React.createRef();

  goToStore = event => {
    // Stop from from submitting
    event.preventDefault();
    const storeName = this.storeNameInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.storeNameInput}
          required 
          placeholder='Store Name'
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store </button>
      </form>
    )
  }
}

export default StorePicker;

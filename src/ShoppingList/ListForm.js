import React, {Component} from 'react'

class ListForm extends Component {
  state= {
    value: '',
    items: this.props.items
  }
handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    this.props.addItem(event,this.state.value);
  };

  deleteLastItem = this.props.deleteLastItem;

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = this.props.noItemsFound;
  render() {
    return (
      <div>
      	<form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>

        <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>
      </div>
    )
  }
}
export default ListForm;
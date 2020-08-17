import React , {Component} from 'react'
import ItemList from './ItemList'
import ListForm from './ListForm'

class ShoppingList extends Component {
  state = {
    items: [],
  };

  addItem = (event,item) => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render () {
    return (
      <div>
      	<h2>Shopping List</h2>
        
    	<ListForm items={this.state.items} addItem={this.addItem} deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound}/>

		<ItemList items={this.state.items}/>
      </div>
    )
  }
    
}
export default ShoppingList;
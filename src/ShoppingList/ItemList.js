import React, {Component} from 'react'

class ItemList extends Component {
  render() {
    let items = this.props.items;
    return (
      <div>
      	<p className="items">Items</p>
        <ol className="item-list">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </div>
    )
  }
}
export default ItemList;
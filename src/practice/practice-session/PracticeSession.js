import React, { Component } from 'react';

export default class PracticeSession extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      list: []
    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    })
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter( item => item.id !== id);

    this.setState({list: updatedList});
  }


  render() {
    return (
      <div className="App">
        <div>
          Add a practice task...    
        </div>
        <br/>
        <input
          type="text"
          placeholder="Enter task here"
          value={ this.state.newItem }
          onChange={e => this.updateInput("newItem", e.target.value)}
        />
        <button
          onClick={() => this.addItem()}>
          Add
        </button>
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                <button
                  onClick={() => this.deleteItem(item.id)}
                >
                  Delete
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
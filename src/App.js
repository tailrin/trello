import React, { Component } from 'react';
import './App.css';
import List from './List.js';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  state = {
    showPopUp: false,
    store: JSON.parse(JSON.stringify(this.props.store)),
    lists: this.renderLists(this.props.store)
  }

  removeItem(cardId, listId){
    const localStore = JSON.parse(JSON.stringify(this.state.store));
    console.log(localStore.lists[0].cards)
    const listIndex = localStore.lists.findIndex(list => {return listId === list.id});
    const cardIdIndex = localStore.lists[listIndex].cardIds.findIndex(cardId0 => {return cardId === cardId0});
    localStore.lists[listIndex].cardIds.splice(cardIdIndex, 1);
    console.log(localStore)
    this.setState({store: JSON.parse(JSON.stringify(localStore)), lists: this.renderLists(JSON.parse(JSON.stringify(localStore)))});
  }

  renderLists(data){
    data.lists.forEach(list => {
      list.cards = list.cardIds.map(cardId => {
        return data.allCards[cardId];
      });
    });
    const lists = data.lists.map(list => {
      return <List header={list.header} key={list.id} id={list.id} cards={list.cards} handler={this.removeItem.bind(this)}/>
    });
    data.lists.forEach(list => {delete list["cards"]})
    return lists
  }

  render() {
    console.log(this.state.lists)
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists}
        </div>
      </main>
    );
  }
}

export default App;
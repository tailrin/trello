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

  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  addNewRandomCard(listId){
    const newCard = this.newRandomCard()
    const localStore = JSON.parse(JSON.stringify(this.state.store));
    const listIndex = localStore.lists.findIndex(list => {return listId === list.id});
    localStore.allCards[newCard.id] = newCard
    localStore.lists[listIndex].cardIds.push(newCard.id)
    this.setState({store: JSON.parse(JSON.stringify(localStore)), lists: this.renderLists(JSON.parse(JSON.stringify(localStore)))});
  }

  removeItem(cardId, listId){
    const localStore = JSON.parse(JSON.stringify(this.state.store));
    const listIndex = localStore.lists.findIndex(list => {return listId === list.id});
    const cardIdIndex = localStore.lists[listIndex].cardIds.findIndex(cardId0 => {return cardId === cardId0});
    localStore.lists[listIndex].cardIds.splice(cardIdIndex, 1);
    this.setState({store: JSON.parse(JSON.stringify(localStore)), lists: this.renderLists(JSON.parse(JSON.stringify(localStore)))});
  }

  renderLists(data){
    data.lists.forEach(list => {
      list.cards = list.cardIds.map(cardId => {
        return data.allCards[cardId];
      });
    });
    const lists = data.lists.map(list => {
      return <List header={list.header} key={list.id} id={list.id} cards={list.cards} handler={this.removeItem.bind(this)} addNewRandomCard={this.addNewRandomCard.bind(this)}/>
    });
    data.lists.forEach(list => {delete list["cards"]})
    return lists
  }

  render() {
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
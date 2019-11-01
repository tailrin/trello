import React, { Component } from 'react';
import './App.css';
import List from './List.js';


// function App(props) {





// }

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };



  render() {
    const { store } = this.props
    store.lists.forEach(list => {
      list.cardIds = list.cardIds.map(cardId => {
        return store.allCards[cardId];
      });
    });

    const lists = store.lists.map(list => {
      return <List header={list.header} key={list.id} cards={list.cardIds} />
    });

    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {lists}
        </div>
      </main>
    );
  }
}

export default App;
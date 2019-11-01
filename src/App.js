import React from 'react';
import './App.css';
import List from './List.js';


function App(props) {
  props.lists.forEach(list => {
    list.cardIds = list.cardIds.map(cardId => {
      props.allCards.cardId
    });
  });

  const lists = props.lists.map(list => {
    <List header={list.header} key={list.id} cards={list.cards} />
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

export default App;
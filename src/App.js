import React from 'react';
import { List } from './List'
import './App.css';

{/*
<main class="App">
		<header class="App-header">
			<h1>Trelloyes!</h1>
		</header>
		<div class="App-list">
			<section class="List">
      </section>
    </div>
</main>
*/}
export class App extends React.Component {

  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const store = this.props.store;
    console.log('app store = ' + JSON.stringify(store));

    const lists = store.lists.map(item => (
      <List
        key={item.id}
        header={item.header}
        cards={item.cardIds.map(id => store.allCards[id])}
      />
    ))


    return (
      <main className="App" >
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
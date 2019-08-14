import React from 'react';
import { List } from './List';

import { STORE } from './STORE';

import './App.css';

/*
<main class="App">
		<header class="App-header">
			<h1>Trelloyes!</h1>
		</header>
		<div class="App-list">
			<section class="List">
      </section>
    </div>
</main>
*/

const newRandomCard = () => {
	const id =
		Math.random()
			.toString(36)
			.substring(2, 4) +
		Math.random()
			.toString(36)
			.substring(2, 4);
	return {
		id,
		title: `Random Card ${id}`,
		content: 'lorem ipsum'
	};
};

function omit(obj, keyToOmit) {
	return Object.entries(obj).reduce(
		(newObj, [key, value]) =>
			key === keyToOmit ? newObj : { ...newObj, [key]: value },
		{}
	);
}

export class App extends React.Component {
	state = {
		store: STORE
	};

	// callback prop
	handleDeleteCard = cardID => e => {
		console.log('handle Delete card called', { cardID });
		const { lists, allCards } = this.state.store;

		const newLists = lists.map(list => ({
			...list,
			cardIds: list.cardIds.filter(id => id !== cardID)
		}));

		const newCards = omit(allCards, cardID);

		this.setState({
			store: {
				lists: newLists,
				allCards: newCards
			}
		});
	};

	// callback prop
	handleAddRandom = listID => e => {
		console.log('handle AddRandom card called', { listID });

		const newCard = newRandomCard();

		const newLists = this.state.store.lists.map(list => {
			if (list.id === listID) {
				return {
					...list,
					cardIds: [...list.cardIds, newCard.id]
				};
			}
			return list;
		});

		this.setState({
			store: {
				lists: newLists,
				allCards: {
					...this.state.store.allCards,
					[newCard.id]: newCard
				}
			}
		});
	};

	render() {
		const { store } = this.state;
		console.log('app store = ' + JSON.stringify(store));

		const lists = store.lists.map(item => (
			<List
				key={item.id}
				header={item.header}
				cards={item.cardIds.map(id => store.allCards[id])}
				/* add the two callback props here */
				onDeleteCard={this.handleDeleteCard}
				onAddCard={this.handleAddRandom}
			/>
		));

		return (
			<main className="App">
				<header className="App-header">
					<h1>Trelloyes!</h1>
				</header>
				<div className="App-list">{lists}</div>
			</main>
		);
	}
}

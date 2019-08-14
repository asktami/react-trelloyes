import React from 'react';
import { Card } from './Card';
import './List.css';

/*
<section class="List">
				<header class="List-header">
					<h2>First list</h2>
				</header>
				<div class="List-cards">
					<div class="Card">
						<button type="button">delete</button>
						<h3>First card</h3>
						<p>lorem ipsum</p>
					</div>
					<button type="button" class="List-add-button">
						+ Add Random Card
					</button>
				</div>
</section>
*/

export class List extends React.Component {
	static defaultProps = {
		onAddCard: () => {}
	};

	render() {
		const allCards = this.props.cards.map(card => (
			<Card
				key={card.id}
				title={card.title}
				content={card.content}
				/* add a callback props here */
				onDeleteCard={this.props.onDeleteCard(card.id)}
			/>
		));

		return (
			<section className="List">
				<header className="List-header">
					<h2>{this.props.header}</h2>
				</header>
				<div className="List-cards">
					{allCards}
					<button
						/* use a callback props here */
						onClick={this.props.onAddCard(this.props.key)}
						type="button"
						className="List-add-button"
					>
						+ Add Random Card
					</button>
				</div>
			</section>
		);
	}
}

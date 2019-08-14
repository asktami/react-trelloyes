import React from 'react';
import './Card.css';

/*
<div class="Card">
	<button type="button">delete</button>
	<h3>Second card</h3>
	<p>lorem ipsum</p>
</div>
*/

export class Card extends React.Component {
	static defaultProps = {
		onDeleteCard: () => {}
	};

	render() {
		return (
			<div className="Card">
				<button
					/* use a callback props here */
					onClick={this.props.onDeleteCard}
					type="button"
				>
					delete
				</button>
				<h3>{this.props.title}</h3>
				<p>{this.props.content}</p>
			</div>
		);
	}
}

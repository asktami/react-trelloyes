// make React available
import React from 'react';

//make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// add snapshot tests
// first cd PROJECT to folder and do:
// npm install react-test-renderer -D
import renderer from 'react-test-renderer';

//make the List component available
import { List } from './List';

//this is the test suite
describe('List component tests', () => {
	// can also test with an empty array:
	// const myCards = [];

	const myCards = [
		{ id: 'a', title: 'First card', content: 'lorem ipsum' },
		{ id: 'b', title: 'Second card', content: 'lorem ipsum' },
		{ id: 'c', title: 'Third card', content: 'lorem ipsum' }
	];

	// smoke test:
	it('renders without crashing', () => {
		// first create a DOM element to render the component into
		const div = document.createElement('div');

		//render the component, this is the actual test, if something is wrong it will fail here
		ReactDOM.render(<List cards={myCards} />, div);

		//clean up code
		ReactDOM.unmountComponentAtNode(div);
	});

	// snapshot testing:
	/*
	1.  Render the component and create a human readable JSON file
   	2. Compare the rendered component to a saved version of the component
	*/

	// add a test to perform a snapshot test on the List component with the header prop set to myHeader and the cards set to a new array
	it('renders the UI as expected with cards array', () => {
		const tree = renderer
			.create(
				<section className="List">
					<header className="List-header">
						<h2>header={'myHeader'}</h2>
					</header>
					<div className="List-cards">
						<List cards={myCards} />
						<button type="button" className="List-add-button">
							+ Add Random Card
						</button>
					</div>
				</section>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

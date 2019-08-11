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
	const myCards = [];

	// smoke test:
	it('renders without crashing', () => {
		// first create a DOM element to render the component into
		const div = document.createElement('div');

		//render the component, this is the actual test, if something is wrong it will fail here
		ReactDOM.render(<List />, div);

		//clean up code
		ReactDOM.unmountComponentAtNode(div);
	});

	// snapshot testing:
	/*
	1.  Render the component and create a human readable JSON file
   	2. Compare the rendered component to a saved version of the component
	*/

	// add a test to perform a snapshot test on the List component with the header prop set to myHeader and the allCards set to ???
	it('renders the UI as expected with header = myHeader and allCards = ???', () => {
		const tree = renderer.create(<List cards={myCards} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { STORE } from './STORE';
import { App } from './App';

console.log('index store = ' + JSON.stringify(STORE));

ReactDOM.render(
	<App
		store={STORE}
	/>,
	document.getElementById('root')
);

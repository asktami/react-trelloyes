import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// importing named export:
import { STORE } from './STORE';

// if importing default export:
// import STORE from './STORE';

import { App } from './App';

console.log('index store = ' + JSON.stringify(STORE));

ReactDOM.render(<App store={STORE} />, document.getElementById('root'));

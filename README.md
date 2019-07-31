# react-trelloyes

[View Live](https://asktami.github.io/react-trelloyes/build/index.html)

## Assignment
You are in a professional web development team as a React engineer. You're working on an app called Trelloyes. (It's very similar to an app you may be aware of called Trello.)

The designers in the team have been working hard and put together a semantic HTML document for you as well as some styles. Your task is to use the HTML document as a reference for creating a React application that renders the same markup. The team has agreed there are to be 3 components and have a specification for each of them.

Eventually, this app would be expanded on further to add functionality and interactivity. For now, only the static design is required. It's important to build out the design in React components so that it's easier to add the interactivity later.

### Requirements
You're required to create a new "create-react-app" project called trelloyes. Remove the boilerplate so you have a clean start and then focus on building 3 components: App, List, and Card.

#### Card.js: 
* The Card component should render markup matching the design.html: a div with a class of 'Card' containing an h3 for the card's title and a p element for the card's content.
* The Card component accepts 2 props: title and content.
  * title is a string of the card's title.
  * content is a string of the card's content.
* These props will be passed in for each Card from the List component.

#### List.js:

* The List component should render markup matching the design.html: a section with a class of 'List', containing a header and div with class 'List-cards'.
* The List component accepts 2 props: header and cards.
  * header is a string of the header of the card to render.
  * cards is an array of card objects. Each object should have a title and content. 
  
  These props will be passed in for each List from the App component.
* The List should render a Card component for each of the cards in the cards array prop.
* Each instance of the Card component should be passed 2 props (and a key). The 2 props are title and content.
* The title prop is a string for the Card's title.
* The content prop is a string of the Card's content.

#### App.js:

* The App component should render markup matching the design.html: the main element, a header with the h1 and a div with class 'App-list'.
* The App component will accept 1 prop, store.
* The store prop is an object with 2 keys: lists and allCards.
  * lists is an array of objects.
  * allCards is an object where each key is a card's ID and the value is the card object with a title and content.
* You'll be given a dummy STORE object to pass to your App.
* The App should render a List component for each of the items in the store.lists array.
* Each instance of the List component should be passed 2 props (and a key). The 2 props are header and cards.
* The header prop is a string for the List's header.
* The cards prop will be an array of card objects.
* You'll need to combine the cardIds array for the list with the allCards object.

### Resources and tips
Follow the steps instructed in the "clean start" checkpoint to create a new project called trelloyes.

Create a file, ./src/store.js and export [this object](https://gist.githubusercontent.com/tomatau/f659fafce0c285124e3215d9bdd34d9b/raw/store.js) from within it. This object can be imported into your index.js and passed to your App as it's store prop.

Follow the design laid out in this [design.html](https://gist.githubusercontent.com/tomatau/f659fafce0c285124e3215d9bdd34d9b/raw/design.html) file. You can make a copy of this file in your application's root directory for reference. Your components should output the same markup as this based on the STORE.

All of the styles you'll need have been made available in this [style.css](https://gist.githubusercontent.com/tomatau/f659fafce0c285124e3215d9bdd34d9b/raw/style.css) file. You should break this into 3 separate CSS files, one for each of your components. Your CSS files should only contain the appropriate styles for their respective component.

[Here's a demo](https://tomatau.github.io/trelloyes/) of the design.html and style.css in action so you can see the final product.


*************************************

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

import React from 'react';
import ReactDOM from 'react-dom';



import Application from './renderer/ui/containers/Application/Application';

import './renderer/helpers/root.scss';
import './renderer/helpers/fonts/Circe/style.scss';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Render components
const render = () => {
  ReactDOM.render(
    <Application />,
    mainElement
  );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
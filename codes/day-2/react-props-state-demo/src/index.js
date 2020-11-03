import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const appObject = new App({name:joydip});
// state, props:{name:'joydip'}
// const appElement = appObject.render();

// ReactDOM.render(
//   appElement,
//   document.getElementById('root')
// );

ReactDOM.render(
  <App name='Joydip' />,
  document.getElementById('root')
);


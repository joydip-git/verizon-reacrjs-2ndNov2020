import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App'
import productStore from './redux/store/productSrore'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={productStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

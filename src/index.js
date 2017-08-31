import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/info">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

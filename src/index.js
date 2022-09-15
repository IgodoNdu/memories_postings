import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Here we initialize redux to the app
import { Provider } from 'react-redux';
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
//Import index.css styles
import './index.css';

//setting up redux
const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


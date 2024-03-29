import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from './configuration/store';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

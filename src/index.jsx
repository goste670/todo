import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';  // Assurez-vous de créer ce fichier avec les reducers appropriés

/* import './index.css'; */
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer); // Assurez-vous de configurer correctement vos reducers

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

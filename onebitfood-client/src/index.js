import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import Store from "./store";
import "./index.css";
import { PersistGate } from 'redux-persist/integration/react'
import persistor from './store/persisted_store';


ReactDOM.render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'));
serviceWorker.unregister();
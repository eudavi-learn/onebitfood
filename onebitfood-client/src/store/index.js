import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducers from "../reducers";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, Reducers)

export default createStore(
  persistedReducer, 
  composeEnhancer(applyMiddleware(thunk))
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import moviesReducer from './reducers/moviesReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(moviesReducer);
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
export default store;


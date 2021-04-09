import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './cart.js';
import categoryReducer from './categories.js';
import productReducer from './products.js';

// cart: cartReducer
const reducers = combineReducers({ categories: categoryReducer, products: productReducer, cart: cartReducer });

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store;

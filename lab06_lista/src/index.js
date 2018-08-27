import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { connect, Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import Shopcart from './containers/shopcart';
import ItemAdd from './containers/form';
import List from './containers/list';
import ShopCart from './containers/shopcart';

const items = (state = [{name: "500RP en LOL ", quantity: 22, price: 120.5}], action) => {
  switch(action.type) {
    case 'ITEM_ADDED': {
      return [...state, {name: action.payload.name, quantity: action.payload.quantity, price: action.payload.price}];
    }
    case 'ITEM_SOLD': {
      return state.map((item, index) => {
        if(index != action.payload){
          return item;
        }
        return Object.assign({}, 
        item, {quantity: item.quantity - 1 })
        
      });
    }
    default: {
      return state;
    }
  }
};

const shoppingCart = (state = [], action) => {
  switch(action.type) {
    case 'ITEM_BOUGHT': {
      return [...state, {name: action.payload.name, price: action.payload.price}];
    }
    default: {
      return state;
    }
  }
};

const total = (state = 0, action) => {
  switch(action.type) {
    case 'TOTAL_CHANGED': {
      return state + action.payload;
    }
    default: {
      return state;
    }
  }
};

const reducer = combineReducers({
  shoppingCart,
  total,
  items,
});

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><div><ItemAdd/><List/><ShopCart/></div></Provider>, document.getElementById('root'));
registerServiceWorker();

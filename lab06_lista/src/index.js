import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { connect, Provider } from 'react-redux';
import { lodash } from 'lodash';
import registerServiceWorker from './registerServiceWorker';

const addItem = (newItem) => ({
  type: 'ITEM_ADDED',
  payload: newItem,
});

const buyItem = (name, price) => ({
  type: 'ITEM_BOUGHT',
  payload: {name: name, price: price},
});

const sellItem = (id) => ({
  type: 'ITEM_SOLD',
  payload: id,
});

const changeTotal = (tot) => ({
  type: 'TOTAL_CHANGED',
  payload: tot,
});

const items = (state = [{name: "Putas", quantity: 22, price: 120.5}], action) => {
  switch(action.type) {
    case 'ITEM_ADDED': {
      return [...state, {id: action.payload.id, name: action.payload.name, quantity: action.payload.quantity, price: action.payload.price}];
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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

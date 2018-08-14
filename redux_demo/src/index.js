import {createStore, combineReducers} from 'redux';

//     V----- action creator (function)
const toggle = () => ({  // <------- action (pojo)
  type: 'TOGGLED',
});

const changeIsTurned = (isOn) => ({
  type: 'TURNED_ON_CHANGED',
  payload: isOn,
});

const addLight = (color) => ({
  type: 'LIGHT_ADD',
  payload: color,
});

const nextLight = (max) => ({
  type: 'NEXT_LIGHT',
  payload: max,
});

//                                   v----- action (pojo)
const isTurnedOn = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLED': {
      return !state;
    }
    case 'TURNED_ON_CHANGED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const turnedLight = (state = 0, action) => {
  switch(action.type) {
    case 'NEXT_LIGHT': {
      return (state +1)%action.payloadñ
    }
    default:{
      return state;
    }
  }
};

const lights = (state = ['red'], action) =>{
  switch(action.type) {
    case 'LIGHT_ADD': {
      return [state, action.payload]
    }
    default: {
      return state;
    }
  }
};

const reducer = combineReducers({
  turnedLight,
  lights,
});

const store = createStore(reducer);

console.log("S0:", store.getState());
store.dispatch(addLight('green'));
console.log("S1:", store.getState());
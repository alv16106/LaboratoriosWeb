import React from 'react';
import { connect } from 'react-redux';
import { sellItem, buyItem, changeTotal } from '../actions';

const ListElemet = ({ apachar, name, quantity, price }) => (
  <li onClick={apachar}>
    {name+ '' + quantity + ' Q' + price}
  </li>
);

const Items = ({ lista, click }) => (
  <div>
    <h1>ITEMS EN VENTA:</h1>
    <ul>
      {lista.map((elemento, index) => <ListElemet apachar = {()=>{click(index, elemento.name, elemento.price)}} {...elemento}/>)}
    </ul>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    click: (id, name, price) => {
      dispatch(sellItem(id));
      dispatch(buyItem(name, price));
      dispatch(changeTotal(price));
    }
  }
};

const mapStateToProps = (state) => {
  return {
    lista: state.items
  }
};

const List = connect(mapStateToProps, mapDispatchToProps)(Items);

export default List;
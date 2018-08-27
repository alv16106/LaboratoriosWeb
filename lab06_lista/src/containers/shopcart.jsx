import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ lista, total }) => (
  <div>
    <h1>CART</h1>
    <h2>{'El total hasta el momento es de: ' + total}</h2>
    <ul>
      {lista.map((elemento) => <ShopElemet {...elemento}/>)}
    </ul>
  </div>
);

const ShopElemet = ({ name, price }) => (
  <li>
    {name + ' Q' + price}
  </li>
);

const mapStateToProps = (state) => {
  return {
    lista: state.shoppingCart,
    total: state.total
  }
};

const ShopCart = connect(mapStateToProps, null)(Cart);

export default ShopCart;
import React from 'react';
import { connect, Provider } from 'react-redux';
import { addItem } from '../actions';

const Add = ({ addOnClick }) => {
  let name, cantidad, precio;
  return(
    <div className={'ree'}>
      <h1>ADD ITEMS</h1>
      <p>Nombre &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cantidad &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Precio(Q)</p>
      <input ref={node => {name = node}} />
      <input ref={node => {cantidad = node}} />
      <input ref={node => {precio = node}} />
      <button onClick={()=>{
       addOnClick({name: name.value, quantity:cantidad.value, price: precio.value});
      }}>Anadir</button>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOnClick: (nuevo) => {
      dispatch(addItem(nuevo));
    }
  }
}


const ItemAdd = connect(null, mapDispatchToProps)(Add);

export default ItemAdd;
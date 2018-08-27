import React from 'react';

const AddItem = () => {
  return(
    <div className={'ree'}>
      <input ref={node => {name = node}} />
      <input ref={node => {cantidad = node}} />
      <input ref={node => {precio = node}} />
      <button onClick={()=>{
       //  
      }}>Anadir</button>
    </div>
  )
};

const listElemet = ({ onClick, name, quantity, price }) => (
  <li onClick={onClick}>
    {name+ ' ' + quantity + ' Q' + price}
  </li>
);

const list = ({ lista, index }) => (
  <ul>
    {lista.map((elemento, index) => <listElemet onClick = {()=>{click(index)}} {...elemento}/>)}
  </ul>
);

const shopElemet = ({ onClick, name, price }) => (
  <li onClick={onClick}>
    {name + ' Q' + price}
  </li>
);
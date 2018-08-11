import React from 'react';
import './form.css';

const Formulario = ({
  busca = () =>{},
  change = () =>{},
  txt = ''
}) => {
  return <form onSubmit={busca}>
    <label>
      <input type="text" value={txt} onChange={change} />
    </label>
    <input type="submit" value="Buscar" className='boton' />
  </form>
}

export default Formulario;
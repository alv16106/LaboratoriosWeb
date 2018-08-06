import React from 'react';
import './luces.css';

const SIZES = ['small', 'medium', 'large']

const Light = ({
  encendida = false,
  color = 'red',
  size = 'medium',
  state = 'off',
  f = () =>{} 
}) => {
  return <button className = {
    `light
    ${SIZES.includes(size) ? size: ''}
    ${encendida.toString()}`
  } style = {{
    background:color,
  }} onClick={()=>{f(color)}}></button>;
};

export default Light;
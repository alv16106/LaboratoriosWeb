import React from 'react';
import './light.css';

const SIZES = ['small', 'medium', 'large']

const Light = ({
  encendida = false,
  color = 'red',
  size = 'medium',
  state = 'off'
}) => {
  return <div className = {
    `light
    ${SIZES.includes(size) ? size: ''}
    ${encendida.toString()}`
  } style = {{
    background:color,
  }}>XD</div>;
};

export default Light;

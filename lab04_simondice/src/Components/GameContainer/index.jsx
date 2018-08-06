import React from 'react';

import Luz from '../Luces';
import './gc.css';


const GameContainer = ({
  colors = ['red', 'yellow', 'green', 'blue'],
  turnedOnLight = 'red',
  size = 'medium',
  f = ()=>{}
}) => (
  <div className="container">
    {
      colors.map(
        color => (
          <Luz
            f={f}
            key={color}
            color={color}
            size={size}
            encendida = {color === turnedOnLight}
          />
        )
      )
    }
  </div>
);


export default GameContainer;
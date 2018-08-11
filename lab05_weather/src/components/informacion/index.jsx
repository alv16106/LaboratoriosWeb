import React from 'react';
import './info.css';
import logo from '../../logo.svg'
import image from '../../logo.png'

const Info = ({
  ciudad = 'Unknown',
  imagen = logo,
  tiempo = 'Unknown',
  grados = 0
}) => {
  return <div className='info'>
    <img src={image} alt='imagen logo'></img>
    <h1>{ciudad}</h1>
    <img src={imagen} alt='weather-img'></img>
    <p className='tiempo'>{tiempo}</p>
    <p className='grados'>{`${grados} C`}</p>
  </div>
}

export default Info;
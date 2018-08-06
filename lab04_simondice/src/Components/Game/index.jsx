import React, { Fragment } from 'react';

import GameContainer from '../GameContainer';

class Game extends React.Component{
  constructor(props) {

    super(props);
    this.state = {
      currentLight: 0,
      light: 0,
      colors: ['green', 'yellow', 'red', 'blue'],
      correcto: [],
      usuario: [],
      presiones: 0
    };
  }

  _addStep = () => {
    const { correcto } = this.state;
    correcto.push(Math.floor(Math.random() * 4));
    this.setState({
      correcto: correcto
    });
    console.log(correcto);
    
    this._startRotating();
  }

  _press = (boton) => {
    const { usuario, colors, correcto } = this.state;
    usuario.push(colors.indexOf(boton));
    this.setState({
      usuario: usuario,
      light: colors.indexOf(boton)
    });
    if (this._comprobar()) {
      console.log("Siguiente");
      console.log(correcto);
      console.log(this.state.usuario);
      
      if (this.state.usuario.length === correcto.length) {
        this._addStep(); 
      }
    }else{
      alert("Perdio!");
    }
  }

  _comprobar = () => {
    const limite = this.state.usuario.length - 1;
    return this.state.usuario[limite] === this.state.correcto[limite]; 
  }

  _startRotating = () => {
    const timer = setInterval(this._changeLight, 500);
    this.setState({
      timer,
    });
  }

  _stopRotating = () => {
    const { timer } = this.state;
    clearInterval(timer);
    this.setState({
      currentLight: 0,
      usuario: [],
      presiones: 0,
    });
    console.log("se acabo");
    
  }

  _changeLight = () => {
    const {
      currentLight,
      correcto,
    } = this.state;
    if (currentLight === correcto.length) {
      this._stopRotating();
      return
    }
    this.setState({
      currentLight: (currentLight + 1),
      light: correcto[currentLight],
    })
  }

  render() {
    const { colors, light } = this.state;
    return (
      <Fragment>
        <GameContainer
          f = {this._press}
          colors={colors}
          turnedOnLight={colors[light]}
        />
        <button onClick={
          this._addStep
        }>START</button>
      </Fragment>
    );
  }
}

export default Game;

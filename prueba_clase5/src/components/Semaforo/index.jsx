import React from 'react';
import Light from '../lights';
import './semaforo.css'

class Semaforo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      colores : this.props.colores ? this.props.colores.split(' ') : ['green', 'yellow', 'red'],
      ahora : this.props.ahora || 0,
      corriendo: 0,
    }
  }

  _cambierino(){
    setInterval(()=>{
      if(this.state.corriendo){
        return
      }
      this.setState({ahora: (this.state.ahora += 1)% this.state.colores.length });
    } 
      , 1000);
  }

  render() {
    return <div className='semaforin'>
      {this.state.colores.map(color => <Light key={color} color = {color} encendida = {this.state.colores.indexOf(color) == this.state.ahora} />)}
      <button onClick = {this._cambierino.bind(this)}>
        Start
      </button>
      <button onClick = {this._cambierino.bind(this)}>
        Stop
      </button>
    </div>   
  };
}

export default Semaforo;
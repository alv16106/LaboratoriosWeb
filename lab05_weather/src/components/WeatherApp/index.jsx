import React from 'react';
import Info from '../informacion';
import Formulario from '../formulario';

const KEY = "db6b8de50ef13cb084bbc7684706afa7";
// Made change here
const URL = "https://api.openweathermap.org/data/2.5";

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      ico: '01d',
      ciudad: 'Desconocido',
      tiempo: 'Who knows',
      txt: ''
    };
  }

  success = (pos) => {
    const crd = pos.coords;
    const lat = crd.latitude;
    const lon = crd.longitude;
    const url = `${URL}/weather?lat=${lat}&lon=${lon}&APPID=${KEY}&units=metric`;
    this.apiCall(url);
  }

  apiCall = (url) => {
    fetch(url).then(
      response => response.json()
    ).then(
      json => {
        this.setState({temp: json.main.temp, ico: json.weather[0].icon, ciudad:json.name, tiempo:json.weather[0].description });
      }
    );
  }

  handleChange = (event) => {
    this.setState({txt: event.target.value});
  }

  handleSubmit = (event) => {
    const url = `${URL}/weather?q=${this.state.txt}&APPID=${KEY}&units=metric`;
    this.apiCall(url);
    event.preventDefault();
  }

  componentDidMount() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.success);
    }
  }

  render() {
    const { temp, ico, ciudad, tiempo, txt } = this.state;
    const icoURL = `http://openweathermap.org/img/w/${ico}.png`;

    return (
      <div>
        <Info grados={temp} ciudad={ciudad} imagen={icoURL} tiempo={tiempo}></Info>
        <Formulario busca={this.handleSubmit} change={this.handleChange} txt={txt}></Formulario>
      </div>
    );
  }
}

export default WeatherApp;
import React from "react";

class Weather extends React.Component {

  constructor(){
    super();
    this.state = {longitude: null, latitude: null, weather: null};
  }

  componentDidMount() {
    let coords = this.getLocation();
  }

  ajax(options) {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url);
    xhr.onload = function () {
      if (xhr.status === 200) {
        options.success(JSON.parse(xhr.response));
      }
    };

    xhr.send(options);
  }

  render() {
    console.log(this.state);
    if (this.state.weather === null) {
      return (
        <div className="loader">Loading...</div>
      );
    } else {
      return (
        <div className="widget weather">
          <h2>{this.state.weather.name}</h2>
          <p>{this.kToF(this.state.weather.main.temp)} &deg; F</p>
          <p>{this.state.weather.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/w/${this.state.weather.weather[0].icon}.png`}/>
        </div>
      );
    }
  }

  kToF(k) {
    return parseInt((((9.0/5.0) * (k - 273)) + 32))
  }

  getWeather() {
    let lat = this.state.latitude;
    let lon = this.state.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=602387abe851cb0749fff26aab7ced88`;
    return this.ajax({
      url: url,
      method: 'GET',
      success: (weatherData) => {
        console.log(weatherData);
        this.setState({weather: weatherData});
      }
    });
    // this.setState({weather: weatherJSON});

  }

  getLocation(){
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos.coords);
      this.setState({longitude: pos.coords.longitude, latitude: pos.coords.latitude});
      this.getWeather();
    });
  }

  success(pos) {
    let crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    return crd.longitude;
  }

}


export default Weather;

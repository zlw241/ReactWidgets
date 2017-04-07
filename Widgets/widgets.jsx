import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock.jsx';
import Weather from './frontend/weather.jsx';
import Autocomplete from './frontend/autocomplete.jsx'

class Root extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div id="outside">
        <Clock/>
        <Weather/>
        <Autocomplete names="Bob Shelly Steve Sharon BoatyMcBoatFace"></Autocomplete>
      </div>

    );
  }

}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
});

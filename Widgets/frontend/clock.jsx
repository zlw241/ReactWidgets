import React from 'react';

class Clock extends React.Component {

  constructor(){
    super();
    this.title = "Digital Watch";
    this.state = { time: new Date() };
    //this.tick();
  }

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return (
      <div className="widget">
        <div className="band">
        </div>
        <div className="clock">
          <h1>{this.title}</h1>
          <div className="time">
            <h3>Time</h3>
            <p>{this.printTime()}</p>
          </div>
          <div className="date">
            <h3>Date</h3>
            <p>{this.printDate()}</p>
          </div>
        </div>
        <div className="band">
        </div>
      </div>
    );
  }

  printTime() {
    let time = this.state.time;
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  }

  printDate() {
    let date = this.state.time;
    return `${date.toDateString()}`;
  }

  tick(){
    this.interval = window.setInterval(() => {
      this.setState({time: new Date()});
    }, 1000);
  }

}


export default Clock;

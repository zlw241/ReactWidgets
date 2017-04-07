import React from "react";

class Autocomplete extends React.Component {

  constructor(props){
    super(props);
    this.state = {inputVal: ""};
  }

  render(){
    return(
      <div className = "autocomplete">
        <input value={this.state.inputVal} type="text"/>
        <h1>{this.props.names}</h1>
      </div>
    );
  }

  handleInput(){
    document.addEventListener("input", (e) => {
      
    });
  }

}


export default Autocomplete;

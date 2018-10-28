import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      location: "",
      weather: null
    }
  }

  getWeather() {
    // call Open Weather API
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);


import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "click me"
    };
  }

  // handler goes here. checks current button text and switches it accordingly
  buttonHandler = () => {
    this.setState({
      buttonText: this.state.buttonText === "click me" ? "thanks" : "click me"
    });
  }

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <button onClick={this.buttonHandler}>{this.state.buttonText}</button>
      </div>
    );
  }
}

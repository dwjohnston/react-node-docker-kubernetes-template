import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super(); 

    this.state = {
      random: 0
    }; 
  }
  getRandom = () =>{
    fetch("/api/random").then((res, rej) => res.json())
    .then(json => {
      this.setState({
        random: json.value
      }); 
    });
  } 

  render() {
    return (
      <div className="App">


        random: {this.state.random}


        <button onClick = {this.getRandom}> get random</button> 
      </div>
    );
  }
}

export default App;

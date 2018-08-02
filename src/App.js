import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
      user: 'teste'
  }

  changeUsarNameHandler = (event) => {
    this.setState({user: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput change={this.changeUsarNameHandler} value={this.state.user} />
        <UserOutput userName={this.state.user} />
      </div>
    );
  }
}

export default App;

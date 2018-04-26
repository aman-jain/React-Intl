import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-Intl POC</h1>
        </header>
        <p>
          <FormattedMessage id='simpleExample' />: <FormattedMessage id='hello' /> 
        </p>
        <p>
          <FormattedMessage id='welcome' values={{name: 'Aman'}}/> 
        </p>  
      </div>
    );
  }
}

export default App;

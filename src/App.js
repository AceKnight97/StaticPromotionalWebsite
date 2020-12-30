import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Pages/main';
import 'antd/dist/antd.css';
import './Styles/style.scss';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <Main />
      //   </header>
      // </div>
      <div>
        <Main />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import './App.css';
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <Main/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

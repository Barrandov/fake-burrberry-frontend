import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import 'normalize.css';
import 'flexboxgrid2/dist/flexboxgrid.css';
import './css/style.css';



class App extends Component {
  render() {
    return (
      <div className="App">
      <title>Burberry - Long Cotton Gabardine Car Coat </title>
        <Header />
        <div className="App-intro">
          <Content />
        </div>
      </div>
    );
  }
}



export default App;

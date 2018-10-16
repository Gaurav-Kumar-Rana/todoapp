import React, { Component } from 'react';
import './App.css';
import Todo from './todolist';
//import MapContainer from './map';
// import DataVisualization from './highchart';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <p style={{margin:20,textAlign:"center"}}>Awsome React Application</p>
        </header> */}
        <Todo></Todo> 
        {/* <MapContainer></MapContainer> */}
        {/* <DataVisualization></DataVisualization> */}
      </div>
    );
  }
}

export default App;

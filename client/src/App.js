import React from "react";
import Weathers from "./components/weather-react";
import Bar from './components/navBar/navBar';
import List from './components/list/list';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Peanut butter and jelly</h1>
      <Bar/>
      <Weathers />
      <List/>
    </div>
  );
}

export default App;

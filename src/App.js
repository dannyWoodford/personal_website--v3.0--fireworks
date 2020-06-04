import React  from 'react';
import './App.scss';
import Scene  from "./containers/Scene.js";
import Header from "./containers/Header.js"

const App = (props) => {

  
    return (
      <div className="App">
        <Header />
        <Scene />
      </div>
    )
}

export default App;



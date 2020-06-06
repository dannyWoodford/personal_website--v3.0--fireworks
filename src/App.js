import React, {useState}  from 'react';
import './App.scss';
import Scene  from "./containers/Scene.js";
import Header from "./containers/Header.js"

const App = (props) => {
  const [active, set] = useState(false)
  
    return (
      <div className="App">
        <Header />
        <Scene active={active} setActive={set} />
      </div>
    )
}

export default App;



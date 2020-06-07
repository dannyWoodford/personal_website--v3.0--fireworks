import React, { useState } from "react";
import "./App.scss";
import Scene from "./containers/Scene.js";

const App = (props) => {
  const [active, set] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="App">
      <div className={menuToggle ? "page shazam" : "page"}>
        <span
          className="menu_toggle"
          onClick={() => setMenuToggle(!menuToggle)}
        >
          <i className="menu_open fa fa-bars fa-lg"></i>
          <i className="menu_close fa fa-times fa-lg"></i>
        </span>
        <ul className="menu_items">
          <li>
            <a href="https://www.xvideos.com/">
              <i className="icon fa fa-signal fa-2x"></i> Moar
            </a>
          </li>
          <li>
            <a href="https://www.xvideos.com/">
              <i className="icon fa fa-coffee fa-2x"></i> Coffee
            </a>
          </li>
          <li>
            <a href="https://www.xvideos.com/">
              <i className="icon fa fa-heart fa-2x"></i> Please
            </a>
          </li>
        </ul>
        <div className="content">
          <div className="content_inner">
            <Scene active={active} setActive={set} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

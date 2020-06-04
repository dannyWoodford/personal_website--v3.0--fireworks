import React from "react";

export default function Header() {

  const icons = () => {
    return (
      <div className="icons">
          <a href="https://www.linkedin.com/in/danny-woodford-54b418126/" target="_blank" rel="noopener noreferrer">
            <img id='linkedin-icon' src="./icons/linkedin-icon.png" alt="linkedin icon" />
          </a>
	        <a href="https://github.com/dannyWoodford" target="_blank" rel="noopener noreferrer">
            <img id='git-icon' src="./icons/github-icon-min.png" alt="github icon" />
          </a>
      </div>
    )
  }

  return (
    <div className="header">
      <div id="name-title">
        <div id="name">
          <p>Danny Woodford</p>
        </div>
        <div id="title">
          <p>Full-Stack Developer</p>
        </div>
      </div>
      {icons()}
    </div>
  );
}

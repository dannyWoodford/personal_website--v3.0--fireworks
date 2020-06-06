import React, {useState} from "react";

  const Icons = () => {
    return (
      <div className="icons">
          <a href="https://www.linkedin.com/in/danny-woodford-54b418126/" target="_blank" rel="noopener noreferrer">
            <img id='linkedin-icon' src="./icons/linkedin-icon.png" alt="linkedin icon" />
          </a>
	        <a href="https://github.com/dannyWoodford" target="_blank" rel="noopener noreferrer">
            <img id='git-icon' src="./icons/github-icon-min.png" alt="github icon" />
          </a>
          {/* <h1>Projects </h1> */}
      </div>
    )
  }



  const AltNav = (...props) => {
    const [checked, setChecked] = useState("s2")

    const handleChecked = (e) => {
      // console.log(e.target.checked)
      setChecked(e.target.id)
    }
    
    return (
      <div className="nav">
        {/* <div className="left space"></div> */}
        <input 
          type="radio" 
          name="s" 
          id="s1"
          checked={checked}
          onChange={handleChecked}/>
        <input 
          type="radio" 
          name="s" 
          id="s2" 
          checked={checked}
          onChange={handleChecked} />          
        <input 
          type="radio" 
          name="s" 
          id="s3"
          checked={checked}
          onChange={handleChecked} />
        <input 
          type="radio" 
          name="s" 
          id="s4"
          checked={checked}
          onChange={handleChecked} />
        {/* <label htmlFor="s1"><img src="http://co0kie.github.io/codepen/mobile-nav/facebook.svg" alt="" /></label> */}
        <label htmlFor="s1"><p>About</p></label>
        <label htmlFor="s2"><p>Home</p></label>
            <div className="circle"></div>
        <label htmlFor="s3"><p>Projects</p></label>
        <label htmlFor="s4"><p>Contact</p></label>
        <div className="phone_content">
          <div className="phone_bottom">
            <span className="indicator"></span>
          </div>
        </div>
      </div>
    ) 
  }


export default function Header() {

  return (
    <>
    <div className="header">
      <div id="name-title">
        <div id="name">
          <p>Danny Woodford</p>
        </div>
        <div id="title">
          <p>Full-Stack Developer</p>
        </div>
      </div>
      {/* <Icons /> */}
    </div>
    <AltNav />
    </>
  );
}

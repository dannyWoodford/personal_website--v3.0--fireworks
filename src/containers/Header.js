// import React, {useState} from "react";

//   const Icons = () => {
//     return (
//       <div className="icons">
//           <a href="https://www.linkedin.com/in/danny-woodford-54b418126/" target="_blank" rel="noopener noreferrer">
//             <img id='linkedin-icon' src="./icons/linkedin-icon.png" alt="linkedin icon" />
//           </a>
// 	        <a href="https://github.com/dannyWoodford" target="_blank" rel="noopener noreferrer">
//             <img id='git-icon' src="./icons/github-icon-min.png" alt="github icon" />
//           </a>
//           {/* <h1>Projects </h1> */}
//       </div>
//     )
//   }

//   const AltNav = (...props) => {

// // var $page = $('.page');

// // $('.menu_toggle').on('click', function(){
// //   $page.toggleClass('shazam');
// // });
// // $('.content').on('click', function(){
// //   $page.removeClass('shazam');
// // });

//     return (
//       <div className="header">
//         <span className="menu_toggle">
//           <i className="menu_open fa fa-bars fa-lg"></i>
//           <i className="menu_close fa fa-times fa-lg"></i>
//         </span>
//         <ul className="menu_items">
//           <li><a href="#"><i className="icon fa fa-signal fa-2x"></i> Moar</a></li>
//           <li><a href="#"><i className="icon fa fa-coffee fa-2x"></i> Coffee</a></li>
//           <li><a href="#"><i className="icon fa fa-heart fa-2x"></i> Please</a></li>
//         </ul>
//       </div>
//     )
//   }

// export default function Header() {

//   return (
//     <group>
//     {/* <div className="header">
//       <div id="name-title">
//         <div id="name">
//           <p>Danny Woodford</p>
//         </div>
//         <div id="title">
//           <p>Full-Stack Developer</p>
//         </div>
//       </div>
//     </div>
//     <AltNav /> */}

//     </group>
//   );
// }
import React, { Component } from "react";

export default class Header extends Component {
  state = {
    menuToggle: false,
  };

  // // var $page = $('.page');

  // // $('.menu_toggle').on('click', function(){
  // //   $page.toggleClass('shazam');
  // // });
  // // $('.content').on('click', function(){
  // //   $page.removeClass('shazam');
  // // });


  render() {
    return (
      <div className="page" className={this.state.menuToggle ?  'shazam': ''}>
        <span className="menu_toggle" onClick={() => this.setState({  menuToggle: !this.state.menuToggle})}>
          <i className="menu_open fa fa-bars fa-lg"></i>
          <i className="menu_close fa fa-times fa-lg"></i>
        </span>
        <ul className="menu_items">
          <li>
            <a href="#">
              <i className="icon fa fa-signal fa-2x"></i> Moar
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa fa-coffee fa-2x"></i> Coffee
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa fa-heart fa-2x"></i> Please
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

import React, { useState, useEffect } from 'react'
import '../css/main.scss'
import {Switch, Route, useLocation, Redirect} from "react-router-dom";

import Canvas from './CANVAS/containers/Canvas.js'
import Icons from './DOM/Icons.js'
import ContactInfo from './DOM/ContactInfo.js'
import Menu from './DOM/Menu.js'
import Skills from './DOM/pages/Skills.js'
import Projects from './DOM/pages/Projects.js'

const App = props => {
	const [menuToggle, setMenuToggle] = useState(false)
	const [menuState, setMenuState] = useState(
		{
			currentName: '',
			currentCanvasColor: '',
			menuItems: [
				{
					name: "home",
					canvasColor: '#000000'
				},
				{
					name: "skills",
					canvasColor: '#2C5B8B'
				},
				{
					name: "projects",
					canvasColor: '#FF7F7F'
				}
			]
		}
	)

	let location = useLocation()
	let menuItems = menuState.menuItems

	useEffect(() => {
		if (location) {
			let strippedLocation = location.pathname.replace(/^\/|\/$/g, '')
			
			let findMenuItem = menuItems.filter((x) => {
				return x.name === strippedLocation
			})

			setMenuState((prevPerson) => {
				return { 
					...prevPerson, 
					currentName: findMenuItem[0] !== undefined ? findMenuItem[0].name : 'home',
					currentCanvasColor: findMenuItem[0] !== undefined ? findMenuItem[0].canvasColor : '#000000'
				}
			})
		}
	}, [location, menuItems])

	const toggleMenuHandler = () => {
		setMenuToggle(!menuToggle)
	}

	return (
		<div className='App'>
			<div className={menuToggle ? 'main is-opened' : 'main'}>
				<Icons />
				<ContactInfo />
				<Menu 
					toggleMenuHandler={toggleMenuHandler}
					menuState={menuState}
				/>
				<div className='content' >
					<div className='content_inner'>
						<Canvas 
							menuIsOpen={menuToggle}
							menuState={menuState}
							toggleMenuHandler={toggleMenuHandler}
						/>
						<div
							className='page home-page'
							style={{
								transition: 'opacity 1.5s ease-in-out',
								opacity: menuState.currentName === 'home' ? 0 : 1,
								background: 'transparent',
							}}
						>
							{/* <div className='container'>
								<div className='about-container'>
									<h1>About</h1>
									<p>
										Former carpenter turned full-stack developer in the pursuit of more challenging and ornate work. Renovating and building houses exposed a passion for engineering and building where I learned to see big jobs through from start to finish independently. I graduated from the Flatiron School where I learned JavaScript, React, Ruby, and Ruby on Rails mainly, and discovered canvas for the first time. While there I started and lead the first cross-discipline collaboration event. In my personal life, I like to write jokes and make things like paintings, replica movie props, woodworking projects for fun. I am a semi-professional stand-up comedian and a part from doing it for the love of it I believe to grow as a person you must chase the things that make you inherently anxious such as expressing ideas publicly or overcoming failure; along with creative problem solving, skills I now consider to be some of my greatest strengths.
									</p>
								</div>
								<div className='skills-container'>
									<h1>Skills</h1>

									<div className='skills-list'>
										<ul>
											<li><p>JavaScript</p></li>
											<li><p>React</p></li>
											<li><p>React-Three-Fiber</p></li>
											<li><p>HTML/Twig</p></li> 
											<li><p>CSS/SASS</p></li> 
											<li><p>PHP</p></li>
											<li><p>Blender</p></li>
											<li><p>GLTF Optimization</p></li>
											<li><p>Sketch</p></li>
											<li><p>Affinity</p></li>
										</ul>
									</div>
								</div>
							</div> */}
						</div>
						<Switch>
							<Route exact path="/">
								<Redirect to="/home" />
							</Route>
							<Route path='/skills'>
								<Skills 
									menuIsOpen={menuToggle}
									menuState={menuState}
								/>
							</Route>
							<Route path='/projects'>
								<Projects 
									menuIsOpen={menuToggle}
									toggleMenuHandler={toggleMenuHandler}
									menuState={menuState}
									/>
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

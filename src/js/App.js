import React, { useState, useEffect } from 'react'
import '../css/main.scss'
import {Switch, Route, useLocation} from "react-router-dom";

import Canvas from './CANVAS/containers/Canvas.js'
import Icons from './DOM/Icons.js'
import ContactInfo from './DOM/ContactInfo.js'
import Menu from './DOM/Menu.js'
import About from './DOM/pages/About.js'
import Projects from './DOM/pages/Projects.js'

const App = props => {
	const [menuToggle, setMenuToggle] = useState(false)
	const [menuState, setMenuState] = useState(
		{
			currentName: 'home',
			currentCanvasColor: '#000000',
			menuItems: [
				{
					name: "home",
					canvasColor: '#000000'
				},
				{
					name: "about",
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
					currentName: findMenuItem[0].name,
					currentCanvasColor: findMenuItem[0].canvasColor
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
						/>
						<Switch>
							<Route path='/home'>
							</Route>
							<Route path='/about'>
								<About 
									menuIsOpen={menuToggle}
									menuState={menuState}
								/>
							</Route>
							<Route path='/projects'>
								<Projects 
									menuIsOpen={menuToggle}
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

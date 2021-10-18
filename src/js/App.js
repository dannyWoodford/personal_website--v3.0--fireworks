import React, { useState, useEffect } from 'react'
import '../css/main.scss'
import {Switch, Route, useLocation, Redirect} from "react-router-dom";

import Canvas from './CANVAS/containers/Canvas.js'
import ContactInfo from './DOM/ContactInfo.js'
import Menu from './DOM/Menu.js'
import Home from './DOM/pages/Home.js'
import About from './DOM/pages/About.js'
import Art from './DOM/pages/Art.js'
import Flatiron from './DOM/pages/Flatiron.js'
import Projects from './DOM/pages/Projects.js'
import Blender from './DOM/pages/Blender.js'
import Brandgage from './DOM/pages/Brandgage.js'

const App = props => {
	const [menuToggle, setMenuToggle] = useState(false)
	const [menuState, setMenuState] = useState(
		{
			currentName: '',
			currentCanvasColor: '',
			menuItems: [
				{
					name: "home",
					canvasColor: '#FF7F7F'
				},
				{
					name: "about",
					canvasColor: '#000000'
				},
				{
					name: "art",
					canvasColor: '#3e54b0'
				},
				{
					name: "flatiron",
					canvasColor: '#f175f6'
				},
				{
					name: "projects",
					canvasColor: '#00ffbe'
				},
				{
					name: "blender",
					canvasColor: '#fff100'
				},
				{
					name: "brandgage",
					canvasColor: '#990000'
				},
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

	const linkToPageHandler = ( delay ) => {
		setMenuToggle(true)

		setTimeout(() => {
			setMenuToggle(false)
		}, delay);
	}

	return (
		<div className='App'>
			<div className={menuToggle ? 'main is-opened' : 'main'}>
				<ContactInfo />
				<Menu 
					toggleMenuHandler={toggleMenuHandler}
					menuState={menuState}
				/>
				<div className='max-width-container'>
					<div className='content' >
						<div className='content_inner'>
							<Canvas 
								menuIsOpen={menuToggle}
								menuState={menuState}
								toggleMenuHandler={toggleMenuHandler}
							/>
							<Switch>
								<Route exact path="/">
									<Redirect to="/home" />
								</Route>
								<Route path="/about">
									<About 
										menuIsOpen={menuToggle}
										toggleMenuHandler={toggleMenuHandler}
										menuState={menuState}
									/>
								</Route>
								<Route path="/art">
									<Art 
										menuIsOpen={menuToggle}
										toggleMenuHandler={toggleMenuHandler}
										menuState={menuState}
									/>
								</Route>
								<Route path="/flatiron">
									<Flatiron 
										menuIsOpen={menuToggle}
										toggleMenuHandler={toggleMenuHandler}
										menuState={menuState}
									/>
								</Route>
								<Route path="/projects">
									<Projects 
										menuIsOpen={menuToggle}
										toggleMenuHandler={toggleMenuHandler}
										menuState={menuState}
									/>
								</Route>
								<Route path="/blender">
									<Blender 
										menuIsOpen={menuToggle}
										toggleMenuHandler={toggleMenuHandler}
										menuState={menuState}
									/>
								</Route>
								<Route path="/brandgage">
									<Brandgage 
										menuIsOpen={menuToggle}
										toggleMenuHandler={toggleMenuHandler}
										menuState={menuState}
									/>
								</Route>
								<Route path='/home'>
									<Home 
										menuIsOpen={menuToggle}
										linkToPageHandler={linkToPageHandler}
										menuState={menuState}
									/>
								</Route>
							</Switch>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

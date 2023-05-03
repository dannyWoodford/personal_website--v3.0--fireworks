import React, { useState, useEffect } from 'react'
import '../css/main.scss'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Scene from './CANVAS/containers/Scene'
import Menu from './DOM/Menu'
import Home from './DOM/pages/Home'
import About from './DOM/pages/About'
import Art from './DOM/pages/Art'
import Flatiron from './DOM/pages/Flatiron'
import Projects from './DOM/pages/Projects'
import Blender from './DOM/pages/Blender'

const App = props => {
	const [menuToggle, setMenuToggle] = useState(false)
	const [menuState, setMenuState] = useState({
		currentName: '',
		currentCanvasColor: '',
		menuItems: [
			{
				name: 'home',
				canvasColor: '#FF7F7F',
			},
			{
				name: 'about',
				canvasColor: '#000000',
			},
			{
				name: 'art',
				canvasColor: '#3e54b0',
			},
			{
				name: 'flatiron',
				canvasColor: '#f175f6',
			},
			{
				name: 'projects',
				canvasColor: '#ffa200',
			},
			{
				name: 'blender',
				canvasColor: '#fff100',
			},
		],
	})

	let location = useLocation()
	let menuItems = menuState.menuItems

	useEffect(() => {
		if (location) {
			let strippedLocation = location.pathname.replace(/^\/|\/$/g, '')

			let findMenuItem = menuItems.filter(x => {
				return x.name === strippedLocation
			})

			setMenuState(prevPerson => {
				return {
					...prevPerson,
					currentName: findMenuItem[0] !== undefined ? findMenuItem[0].name : 'home',
					currentCanvasColor: findMenuItem[0] !== undefined ? findMenuItem[0].canvasColor : '#000000',
				}
			})
		}
	}, [location, menuItems])

	const toggleMenuHandler = () => {
		setMenuToggle(!menuToggle)
	}

	const linkToPageHandler = delay => {
		setMenuToggle(true)

		setTimeout(() => {
			setMenuToggle(false)
		}, delay)
	}

	return (
		<div className='App'>
			<div className={menuToggle ? 'main is-opened' : 'main'}>
				<Menu toggleMenuHandler={toggleMenuHandler} menuState={menuState} />
				<div className='max-width-container'>
					<div className='content'>
						<div className='content_inner'>
							<Scene menuIsOpen={menuToggle} menuState={menuState} toggleMenuHandler={toggleMenuHandler} />
							<Routes>
								<Route index element={<Navigate to='/home' replace />} />
								<Route path='/about' element={<About menuIsOpen={menuToggle} toggleMenuHandler={toggleMenuHandler} menuState={menuState} />} />
								<Route path='/art' element={<Art menuIsOpen={menuToggle} toggleMenuHandler={toggleMenuHandler} menuState={menuState} />} />
								<Route path='/flatiron' element={<Flatiron menuIsOpen={menuToggle} toggleMenuHandler={toggleMenuHandler} menuState={menuState} />} />
								<Route path='/projects' element={<Projects menuIsOpen={menuToggle} toggleMenuHandler={toggleMenuHandler} menuState={menuState} />} />
								<Route path='/blender' element={<Blender menuIsOpen={menuToggle} toggleMenuHandler={toggleMenuHandler} menuState={menuState} />} />
								<Route path='/home' element={<Home menuIsOpen={menuToggle} linkToPageHandler={linkToPageHandler} menuState={menuState} />} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

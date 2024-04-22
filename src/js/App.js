import React, { useState, useEffect } from 'react'
import '../css/main.scss'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import { extractWordsFromURL } from './helpers/Helpers'

import Scene from './CANVAS/containers/Scene'
import Menu from './DOM/Menu'
import Home from './DOM/pages/Home'
import About from './DOM/pages/About'
import Art from './DOM/pages/Art'
import Projects from './DOM/pages/Projects'
import Blender from './DOM/pages/Blender'

export default function App() {
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
			let strippedLocation = extractWordsFromURL(location.pathname)[0]

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
				<div id="background" />
				<Menu toggleMenuHandler={toggleMenuHandler} menuState={menuState} />
				<div className='max-width-container'>
					<div className='content'>
						<div className='content_inner'>
							<Scene menuIsOpen={menuToggle} menuState={menuState} />
							<Routes>
								<Route index element={<Navigate to='/home' replace />} />
								<Route path='/about' element={<About currentName={menuState.currentName} />} />
								<Route path='/art' element={<Art currentName={menuState.currentName} />} />
								<Route path='/projects' element={<Navigate to='/projects/rocket' replace />} />
								<Route path='/projects/*' element={<Projects currentName={menuState.currentName} />} />
								<Route path='/blender' element={<Blender currentName={menuState.currentName} />} />
								<Route path='/home' element={<Home linkToPageHandler={linkToPageHandler} currentName={menuState.currentName} />} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
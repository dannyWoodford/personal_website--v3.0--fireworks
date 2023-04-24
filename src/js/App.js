import '../css/main.scss'
import React, { useState, useEffect } from 'react'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'

// import Canvas from './CANVAS/containers/Canvas'
import Intro from './CANVAS/Intro/Intro'
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
				canvasColor: 'black',
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
							{/* <Canvas menuIsOpen={menuToggle} menuState={menuState} toggleMenuHandler={toggleMenuHandler} /> */}
							<Intro menuIsOpen={menuToggle} menuState={menuState} toggleMenuHandler={toggleMenuHandler} />
							<Switch>
								<Route exact path='/'>
									<Redirect to='/home' />
								</Route>
								<Route path='/about'>
									<About menuIsOpen={menuToggle} toggleMenuHandler={toggleMenuHandler} menuState={menuState} />
								</Route>
								<Route path='/art'>
									<Art menuIsOpen={menuToggle} toggleMenuHandler={toggleMenuHandler} menuState={menuState} />
								</Route>
								<Route path='/flatiron'>
									<Flatiron menuIsOpen={menuToggle} toggleMenuHandler={toggleMenuHandler} menuState={menuState} />
								</Route>
								<Route path='/projects'>
									<Projects menuIsOpen={menuToggle} toggleMenuHandler={toggleMenuHandler} menuState={menuState} />
								</Route>
								<Route path='/blender'>
									<Blender menuIsOpen={menuToggle} toggleMenuHandler={toggleMenuHandler} menuState={menuState} />
								</Route>
								<Route path='/home'>
									<Home menuIsOpen={menuToggle} linkToPageHandler={linkToPageHandler} menuState={menuState} />
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

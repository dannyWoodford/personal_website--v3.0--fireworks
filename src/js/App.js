import React, { useState } from 'react'
import '../css/main.scss'

import Canvas from './CANVAS/containers/Canvas.js'
import Icons from './DOM/Icons.js'
import ContactInfo from './DOM/ContactInfo.js'
import Menu from './DOM/Menu.js'
import About from './DOM/About.js'
import Projects from './DOM/Projects.js'

const App = props => {
	const [menuToggle, setMenuToggle] = useState(false)
	const [menuState, setMenuState] = useState(
		{
			currentName: 'main',
			currentCanvasColor: '#000000',
			menuItems: [
				{
					name: "main",
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

	const toggleMenuHandler = () => {
		console.log('toggleMenuHandler')
		setMenuToggle(!menuToggle)
	}
	
	const setMenuStateHandler = (name) => {

		setMenuToggle(!menuToggle)
		
		let findMenuItem = menuState.menuItems.filter((x) => {
			return x.name === name
		})

		setMenuState((prevPerson) => {
			return { 
				...prevPerson, 
				currentName: findMenuItem[0].name,
				currentCanvasColor: findMenuItem[0].canvasColor
			}
		})
	}

	return (
		<div className='App'>
			<div className={menuToggle ? 'page is-opened' : 'page'}>
				<Icons />
				<ContactInfo />
				<Menu 
					toggleMenuHandler={toggleMenuHandler}
					menuState={menuState}
					setMenuStateHandler={setMenuStateHandler}
				/>
				<div className='content' >
					<div className='content_inner'>
						<Canvas 
							menuIsOpen={menuToggle}
							menuState={menuState}
						/>
						<About 
							menuIsOpen={menuToggle}
							menuState={menuState}
						/>
						<Projects 
							menuIsOpen={menuToggle}
							menuState={menuState}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

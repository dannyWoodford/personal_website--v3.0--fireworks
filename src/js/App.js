import React, { useState } from 'react'
import '../css/main.scss'

import Canvas from './CANVAS/containers/Canvas.js'
import Icons from './DOM/Icons.js'
import ContactInfo from './DOM/ContactInfo.js'
import Menu from './DOM/Menu.js'

const App = props => {
	const [menuToggle, setMenuToggle] = useState(false)

	const toggleMenu = () => {
		setMenuToggle(!menuToggle)
	}

	return (
		<div className='App'>
			<div className={menuToggle ? 'page is-opened' : 'page'}>
				<Icons />
				<ContactInfo />

				<Menu toggleMenu={toggleMenu}/>
				<div className='content' >
					<div className='content_inner'>
						<Canvas menuIsOpen={menuToggle}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

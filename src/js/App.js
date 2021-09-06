import React, { useState } from 'react'
import '../css/main.scss'

import Canvas from './CANVAS/containers/Canvas.js'
import Icons from './DOM/Icons.js'
import ContactInfo from './DOM/ContactInfo.js'
import Menu from './DOM/Menu.js'

const App = props => {
	const [menuToggle, setMenuToggle] = useState(false)

	const closeMenu = () => {
		setMenuToggle(false)
	}

	return (
		<div className='App'>
			<div className={menuToggle ? 'page is-opened' : 'page'}>
				<Icons />
				<ContactInfo />

				<Menu setMenuToggle={setMenuToggle} menuToggle={menuToggle}/>
				<div
					className='content'
					onClick={() => (menuToggle ? closeMenu() : '')}
				>
					<div className='content_inner'>
						<Canvas />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

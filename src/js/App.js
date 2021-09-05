import React, { useState } from 'react'
import '../css/main.scss'

import Canvas from './CANVAS/containers/Canvas.js'
import Icons from './DOM/Icons.js'
import ContactInfo from './DOM/ContactInfo.js'

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

				<span className='menu_toggle' onClick={() => setMenuToggle(!menuToggle)}>
					<i className='menu_open'><img src={process.env.PUBLIC_URL + '/icons/menu.svg'} alt='menu-icon' /></i><i className='menu_close'><img src={process.env.PUBLIC_URL + '/icons/exit.svg'} alt='close-icon' /></i>
				</span>
				<div className='menu_items'>
					<ul>
						<li>
							<div className='menu-item'>
								<i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/about.svg' } alt='about-icon' /></i>
								About
							</div>
						</li>
						<li>
							<a className='menu-item' href={process.env.PUBLIC_URL + '/Resume.pdf'} data-nav='resume' rel='noopener noreferrer' target='_blank'>
								<i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/resume.svg' } alt='resume-icon'/></i>
								Resume
							</a>
						</li>
						<li>
							<div className='menu-item'>
								<i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/brain.svg' } alt='brain-icon' /></i>
								Projects
							</div>
						</li>
					</ul>
				</div>
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

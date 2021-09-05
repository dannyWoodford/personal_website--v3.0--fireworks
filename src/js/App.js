import React, { useState } from 'react'
import '../css/App.scss'
import Canvas from './containers/Canvas.js'

const Icons = () => {
	return (
		<div className='icon-container'>
			<a href='https://www.linkedin.com/in/danny-woodford-54b418126/' target='_blank' rel='noopener noreferrer'>
				<img id='linkedin-icon' src={process.env.PUBLIC_URL + '/icons/linkedin.svg'} alt='linkedin-icon'/>
			</a>
			<a href='https://github.com/dannyWoodford' target='_blank' rel='noopener noreferrer'>
				<img id='github-icon' src={process.env.PUBLIC_URL + '/icons/github.svg'} alt='github-icon' />
			</a>
			<a href='mailto:daniel.woodford.g@gmail.com' target='_blank' rel='noopener noreferrer'>
				<img id='mail-icon' src={process.env.PUBLIC_URL + '/icons/mail.svg'} alt='mail-icon'/>
			</a>
			<a href='tel:9089078680' target='_blank' rel='noopener noreferrer'>
				<img id='phone-icon' src={process.env.PUBLIC_URL + '/icons/phone.svg'} alt='phone-icon'/>
			</a>
		</div>
	)
}

const App = props => {
	const [menuToggle, setMenuToggle] = useState(false)

	const closeMenu = () => {
		setMenuToggle(false)
	}

	return (
		<div className='App'>
			<div className={menuToggle ? 'page shazam' : 'page'}>
				<Icons />
				<div className='contact-info'>
					<div id='name'><p>DANNY WOODFORD</p></div>
					<div id='occupation'><p>FULL STACK DEVELOPER</p></div>
				</div>

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

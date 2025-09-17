import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu({ toggleMenuHandler }) {
	return (
		<>
			<div className='menu_toggle' onClick={() => toggleMenuHandler()}>
				<i className='menu_open'>
					<img src={process.env.PUBLIC_URL + '/icons/menu.svg'} alt='menu-icon' draggable='false' />
				</i>
				<i className='menu_close'>
					<img src={process.env.PUBLIC_URL + '/icons/exit.svg'} alt='close-icon' draggable='false' />
				</i>
			</div>
			<div className='menu_items'>
				<ul>
					<li onClick={() => toggleMenuHandler()}>
						<NavLink to='/home' className='menu-item' activeclassname='is-selected'>
							{/* <i className='menu-icon resume-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/resume.svg' } alt='home-icon' /></i> */}
							Home
						</NavLink>
					</li>
					<li onClick={() => toggleMenuHandler()}>
						<NavLink to='/about' className='menu-item' activeclassname='is-selected'>
							{/* <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/brain.svg' } alt='brain-icon' /></i> */}
							About
						</NavLink>
					</li>
					<li onClick={() => toggleMenuHandler()}>
						<NavLink to='/art' className='menu-item' activeclassname='is-selected'>
							{/* <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/brain.svg' } alt='brain-icon' /></i> */}
							Art
						</NavLink>
					</li>
					<li onClick={() => toggleMenuHandler()}>
						<NavLink to='/blender' className='menu-item' activeclassname='is-selected'>
							{/* <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/brain.svg' } alt='brain-icon' /></i> */}
							Blender
						</NavLink>
					</li>
					<li onClick={() => toggleMenuHandler()}>
						<NavLink to='/projects/subvrsive' className='menu-item' activeclassname='is-selected'>
							{/* <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/brain.svg' } alt='brain-icon' /></i> */}
							Projects
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	)
}

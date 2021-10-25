import React from 'react'
import { NavLink } from "react-router-dom";

export default function Menu({...props}) {
    return (
        <>
            <div 
                className='menu_toggle' 
                onClick={() => props.toggleMenuHandler()}
            >
				<i className='menu_open'><img src={process.env.PUBLIC_URL + '/icons/menu.svg'} alt='menu-icon' /></i><i className='menu_close'><img src={process.env.PUBLIC_URL + '/icons/exit.svg'} alt='close-icon' /></i>
            </div>
            <div className='menu_items'>
                <ul>
                    <li onClick={() => props.toggleMenuHandler()}>
                        <NavLink to='/home' className='menu-item' activeClassName="is-selected">
                            {/* <i className='menu-icon resume-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/resume.svg' } alt='home-icon' /></i> */}
                            Home
                        </NavLink>
                    </li>
                    <li onClick={() => props.toggleMenuHandler()}>
                        <NavLink to='/about' className='menu-item' activeClassName="is-selected">
                            {/* <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/brain.svg' } alt='brain-icon' /></i> */}
                            About
                        </NavLink>
                    </li>
                    <li onClick={() => props.toggleMenuHandler()}>
                        <NavLink to='/art' className='menu-item' activeClassName="is-selected">
                            {/* <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/brain.svg' } alt='brain-icon' /></i> */}
                            Art
                        </NavLink>
                    </li>
                    <li onClick={() => props.toggleMenuHandler()}>
                        <NavLink to='/blender' className='menu-item' activeClassName="is-selected">
                            {/* <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/brain.svg' } alt='brain-icon' /></i> */}
                            Blender
                        </NavLink>
                    </li>
					<li onClick={() => props.toggleMenuHandler()}>
                        <NavLink to='/flatiron' className='menu-item' activeClassName="is-selected">
                            {/* <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/brain.svg' } alt='brain-icon' /></i> */}
                            Flatiron
                        </NavLink>
                    </li>
                    <li onClick={() => props.toggleMenuHandler()}>
                        <NavLink to='/brandgage' className='menu-item' activeClassName="is-selected">
                            {/* <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/brain.svg' } alt='brain-icon' /></i> */}
                            Brandgage
                        </NavLink>
                    </li>
                    <li onClick={() => props.toggleMenuHandler()}>
                        <NavLink to='/projects' className='menu-item' activeClassName="is-selected">
                            {/* <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/brain.svg' } alt='brain-icon' /></i> */}
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

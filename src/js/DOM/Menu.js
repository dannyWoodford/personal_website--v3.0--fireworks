import React from 'react'
import { NavLink } from "react-router-dom";

export default function Menu({...props}) {
    return (
        <>
            <span 
                className='menu_toggle' 
                onClick={() => props.toggleMenuHandler()}
            >
            <i className='menu_open'><img src={process.env.PUBLIC_URL + '/icons/menu.svg'} alt='menu-icon' /></i><i className='menu_close'><img src={process.env.PUBLIC_URL + '/icons/exit.svg'} alt='close-icon' /></i>
            </span>
            <div className='menu_items'>
                <ul>
                    <li onClick={() => props.toggleMenuHandler()}>
                        <NavLink to='/home' className='menu-item' activeClassName="is-selected">
                            <i className='menu-icon resume-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/resume.svg' } alt='about-icon' /></i>
                            Home
                        </NavLink>
                    </li>
                    <li onClick={() => props.toggleMenuHandler()}>
                        <NavLink to='/about' className='menu-item' activeClassName="is-selected">
                            <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/about.svg' } alt='about-icon' /></i>
                            About
                        </NavLink>
                    </li>
                    <li onClick={() => props.toggleMenuHandler()}>
                        <NavLink to='/projects' className='menu-item' activeClassName="is-selected">
                            <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/brain.svg' } alt='brain-icon' /></i>
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

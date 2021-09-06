import React from 'react'

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
                    <li>
                        <div className='menu-item' onClick={() => props.setMenuStateHandler('main')}>
                            <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/resume.svg' } alt='about-icon' /></i>
                            Home
                        </div>
                    </li>
                    <li>
                        <div className='menu-item' onClick={() => props.setMenuStateHandler('about')}>
                            <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/about.svg' } alt='about-icon' /></i>
                            About
                        </div>
                    </li>
                    <li>
                        <div className='menu-item' onClick={() => props.setMenuStateHandler('projects')}>
                            <i className='menu-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/brain.svg' } alt='brain-icon' /></i>
                            Projects
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

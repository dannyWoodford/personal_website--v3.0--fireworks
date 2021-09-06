import React from 'react'

export default function Menu({...props}) {
    return (
        <>
            <span 
                className='menu_toggle' 
                onClick={() => props.toggleMenu()}
            >
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
                            <i className='menu-icon resume-icon'><img className='menu-icon-sgv' src={ process.env.PUBLIC_URL + '/icons/resume.svg' } alt='resume-icon'/></i>
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
        </>
    )
}

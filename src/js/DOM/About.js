import React from 'react'

export default function About({...props}) {

    const menuStateCurrentName = props.menuState.currentName

    return (
        <div 
            className='about-page'
            style={{
                transition: 'opacity 0.5s ease-in-out .5s',
                opacity: menuStateCurrentName === 'about' ? 1 : 0
            }}
        >
            <div className='about-container'>
                <h1>About</h1>
            </div>
        </div>
    )
}

import React from 'react'

export default function Projects({...props}) {

    const menuStateCurrentName = props.menuState.currentName

    return (
        <div 
            className='projects-page'
            style={{
                transition: 'opacity 0.5s ease-in-out .5s',
                opacity: menuStateCurrentName === 'projects' ? 1 : 0
            }}
        >
            <div className='projects-container'>
                <h1>Projects</h1>
            </div>
        </div>
    )
}

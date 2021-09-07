import React from 'react'

export default function Projects({...props}) {

    const menuStateCurrentName = props.menuState.currentName

    return (
        <div 
            className='page projects-page'
            style={{
                transition: 'opacity 2s ease-in-out .6s',
                opacity: menuStateCurrentName === 'projects' ? 1 : 0,
            }}
        >
            <div className='container'>
                <h1>Projects</h1>
                <p>coming soon...</p>
            </div>
        </div>
    )
}
